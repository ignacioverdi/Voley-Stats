Attribute VB_Name = "GamePlan"
' ============================================================
' CASLA VOLEY - Game Plan JS Generator
' ============================================================

Private Function q(s As String) As String
    q = Chr(34) & s & Chr(34)
End Function

Private Function SafeEff(v As Variant) As String
    If IsNumeric(v) Then
        SafeEff = CStr(CLng(CDbl(v) * 100))
    Else
        SafeEff = "null"
    End If
End Function

Private Function SafeInt(v As Variant) As String
    If IsNumeric(v) Then
        On Error Resume Next
        Dim safeIntD As Double: safeIntD = CDbl(v)
        On Error GoTo 0
        If safeIntD > 0 Then
            SafeInt = CStr(CLng(safeIntD))
        Else
            SafeInt = "0"
        End If
    Else
        SafeInt = "0"
    End If
End Function

Private Function OrigZona(combo As String) As Integer
    Select Case UCase(Trim(combo))
        Case "X5", "V5": OrigZona = 4
        Case "X6", "V6": OrigZona = 2
        Case "X8", "V8": OrigZona = 9
        Case "XP", "XR", "XB": OrigZona = 8
        Case "X1", "X2", "X7", "XM": OrigZona = 3
        Case Else: OrigZona = 8
    End Select
End Function

Private Function Top2Destinos(vals() As Double, zonas() As Integer) As String
    Dim total As Double: total = 0
    Dim i As Integer
    For i = 0 To UBound(vals)
        If vals(i) > 0 Then total = total + vals(i)
    Next i
    If total = 0 Then
        Top2Destinos = "[]"
        Exit Function
    End If
    Dim best1 As Integer: best1 = -1
    Dim best2 As Integer: best2 = -1
    Dim v1 As Double: v1 = -1
    Dim v2 As Double: v2 = -1
    For i = 0 To UBound(vals)
        If vals(i) > v1 Then
            v2 = v1: best2 = best1
            v1 = vals(i): best1 = i
        ElseIf vals(i) > v2 Then
            v2 = vals(i): best2 = i
        End If
    Next i
    Dim result As String: result = "["
    If best1 >= 0 Then
        result = result & "{" & q("z") & ":" & zonas(best1) & "," & q("pct") & ":" & CLng(v1 / total * 100) & "}"
    End If
    If best2 >= 0 And v2 > 0 Then
        result = result & ",{" & q("z") & ":" & zonas(best2) & "," & q("pct") & ":" & CLng(v2 / total * 100) & "}"
    End If
    result = result & "]"
    Top2Destinos = result
End Function

Public Function GetVideoURL(numJug As String, combo As String) As String
    GetVideoURL = "null"
    
    ' Detectar hoja de videos del rival automaticamente
    ' Busca VIDEOS_RIVAL primero, luego VIDEOS de CASLA
    Dim wsVid As Worksheet
    Dim wsExp As Worksheet
    Dim hojaVideos As String
    
    On Error Resume Next
    Set wsExp = ThisWorkbook.Sheets("EXPORTAR")
    On Error GoTo 0
    
    If Not wsExp Is Nothing Then
        Dim hojaRival As String
        hojaRival = Trim(CStr(wsExp.Cells(6, 3).Value))
        If hojaRival <> "" Then
            hojaVideos = "VIDEOS_" & UCase(Left(hojaRival, 10))
        End If
    End If
    
    ' Intentar hoja del rival primero
    If hojaVideos <> "" Then
        On Error Resume Next
        Set wsVid = ThisWorkbook.Sheets(hojaVideos)
        On Error GoTo 0
    End If
    
    ' Si no existe, usar VIDEOS de CASLA
    If wsVid Is Nothing Then
        On Error Resume Next
        Set wsVid = ThisWorkbook.Sheets("VIDEOS")
        On Error GoTo 0
    End If
    
    If wsVid Is Nothing Then Exit Function
    
    Dim r As Long
    Dim lastNum As String: lastNum = ""
    For r = 5 To 2000
        Dim nv As Variant: nv = wsVid.Cells(r, 2).Value  ' Col B = JUGADOR
        Dim cv As Variant: cv = wsVid.Cells(r, 4).Value  ' Col D = COMBO
        Dim uv As Variant: uv = wsVid.Cells(r, 6).Value  ' Col F = URL
        
        ' Si hay nombre en col B, actualizamos lastNum
        If Not IsEmpty(nv) And Trim(CStr(nv)) <> "" Then
            lastNum = Trim(CStr(nv))
        End If
        
        ' Comparar por nombre (VIDEOS_RIVAL usa nombre en col B)
        ' o por numero (#XX en col A como en VIDEOS de CASLA)
        Dim nA As Variant: nA = wsVid.Cells(r, 1).Value
        If Not IsEmpty(nA) And Trim(CStr(nA)) <> "" Then
            Dim nAs As String: nAs = Trim(CStr(nA))
            If Left(nAs, 1) = "#" Then lastNum = Mid(nAs, 2)
        End If
        
        If lastNum = Trim(numJug) And Trim(CStr(cv)) = Trim(combo) Then
            If Not IsEmpty(uv) And CStr(uv) <> "" And CStr(uv) <> "False" Then
                GetVideoURL = Chr(34) & CStr(uv) & Chr(34)
            End If
            Exit Function
        End If
        
        ' Parar si hay muchas filas vacias seguidas
        If IsEmpty(nv) And IsEmpty(cv) And IsEmpty(uv) And r > 20 Then
            Dim checkEmpty As Boolean: checkEmpty = True
            Dim re As Integer
            For re = r To r + 5
                If wsVid.Cells(re, 2).Value <> "" Or wsVid.Cells(re, 4).Value <> "" Then
                    checkEmpty = False
                    Exit For
                End If
            Next re
            If checkEmpty Then Exit For
        End If
    Next r
End Function

Public Sub GenerarGamePlanJS()
    Dim wsExp As Worksheet: Set wsExp = ThisWorkbook.Sheets("EXPORTAR")
    Dim hojaRival As String: hojaRival = Trim(CStr(wsExp.Cells(6, 3).Value))
    Dim rival As String:     rival = Trim(CStr(wsExp.Cells(3, 3).Value))
    Dim torneo As String:    torneo = Trim(CStr(wsExp.Cells(4, 3).Value))
    Dim fecha As Integer:    fecha = CInt(wsExp.Cells(5, 3).Value)

    Dim wsR As Worksheet
    On Error Resume Next
    Set wsR = ThisWorkbook.Sheets(hojaRival)
    On Error GoTo 0
    If wsR Is Nothing Then
        MsgBox "No se encontro la hoja '" & hojaRival & "'.", vbExclamation
        Exit Sub
    End If

    Application.StatusBar = "Generando Game Plan JS..."

    Dim destZonas(7) As Integer
    destZonas(0) = 1: destZonas(1) = 9: destZonas(2) = 2: destZonas(3) = 6
    destZonas(4) = 8: destZonas(5) = 5: destZonas(6) = 7: destZonas(7) = 4

    Dim saqDestZonas(5) As Integer
    saqDestZonas(0) = 1: saqDestZonas(1) = 9: saqDestZonas(2) = 6
    saqDestZonas(3) = 8: saqDestZonas(4) = 5: saqDestZonas(5) = 7

    ' Leer info tactica col BJ (62) filas 4-15
    Dim tacInfo(11, 9) As String
    Dim ri As Integer
    For ri = 0 To 11
        Dim rowT As Integer: rowT = 4 + ri
        Dim ci As Integer
        For ci = 0 To 9
            Dim vt As Variant: vt = wsR.Cells(rowT, 62 + ci).Value
            If IsEmpty(vt) Or IsNull(vt) Then
                tacInfo(ri, ci) = ""
            Else
                tacInfo(ri, ci) = Trim(CStr(vt))
            End If
        Next ci
    Next ri

    Dim ff As Integer: ff = FreeFile
    Dim ruta As String: ruta = ThisWorkbook.Path & "\datos_gameplan.js"
    Open ruta For Output As #ff

    Print #ff, "window.GAMEPLAN_DATA = {"
    Print #ff, "  " & q("rival") & ": " & q(rival) & ","
    Print #ff, "  " & q("torneo") & ": " & q(torneo) & ","
    Print #ff, "  " & q("fecha") & ": " & fecha & ","
    Print #ff, "  " & q("generado") & ": " & q(Format(Now, "DD/MM/YYYY HH:MM")) & ","
    Print #ff, "  " & q("jugadores") & ": ["

    Dim primerJug As Boolean: primerJug = True

    For ri = 0 To 11
        If tacInfo(ri, 0) = "" Then GoTo SigJug

        Dim numJug As String:    numJug = tacInfo(ri, 0)
        Dim nombreJug As String: nombreJug = tacInfo(ri, 1)
        Dim posJug As String:    posJug = tacInfo(ri, 2)
        Dim bloqueo As String:   bloqueo = tacInfo(ri, 3)
        Dim defensa As String:   defensa = tacInfo(ri, 4)
        Dim pos6 As String:      pos6 = tacInfo(ri, 5)
        Dim pos5 As String:      pos5 = tacInfo(ri, 6)
        Dim pos1 As String:      pos1 = tacInfo(ri, 7)
        Dim nota As String:      nota = tacInfo(ri, 8)
        Dim videoURL As String:  videoURL = tacInfo(ri, 9)

        Dim colorJug As String
        Select Case UCase(posJug)
            Case "OPUESTO":  colorJug = "#818cf8"
            Case "CENTRAL":  colorJug = "#f97316"
            Case "PUNTA":    colorJug = "#22c55e"
            Case "ARMADOR":  colorJug = "#f59e0b"
            Case "LIBERO":   colorJug = "#06b6d4"
            Case Else:       colorJug = "#64748b"
        End Select

        ' ?? ATAQUES ????????????????????????????????????????????
        Dim ataques As String: ataques = "["
        Dim primerAtk As Boolean: primerAtk = True

        Dim grupoHdr(1) As Integer: grupoHdr(0) = 4:  grupoHdr(1) = 12
        Dim grupoMax(1) As Integer: grupoMax(0) = 10: grupoMax(1) = 17

        Dim gr As Integer
        For gr = 0 To 1
            Dim hdrRow As Integer: hdrRow = grupoHdr(gr)
            Dim maxRow As Integer: maxRow = grupoMax(gr)
            Dim dataRow1 As Integer: dataRow1 = hdrRow + 1
            Dim jCol As Integer: jCol = -1
            Dim col2 As Integer
            For col2 = 1 To 60
                Dim cv2 As Variant: cv2 = wsR.Cells(hdrRow, col2).Value
                If Not IsEmpty(cv2) And Not IsNull(cv2) Then
                    Dim cv2s As String: cv2s = Trim(Replace(CStr(cv2), Chr(160), " "))
                    If Left(cv2s, Len(numJug) + 1) = numJug & " " Then
                        jCol = col2
                        Exit For
                    End If
                End If
            Next col2
            If jCol < 0 Then GoTo SigGrupo

            Dim dRow As Integer
            For dRow = dataRow1 To maxRow
                Dim comboV As Variant: comboV = wsR.Cells(dRow, jCol + 1).Value
                If IsEmpty(comboV) Or IsNull(comboV) Then GoTo SigCombo
                Dim comboStr As String: comboStr = Trim(CStr(comboV))
                If comboStr = "" Or comboStr = "ZONA" Then GoTo SigCombo

                Dim destVals(7) As Double
                Dim dz As Integer
                For dz = 0 To 7
                    Dim dv As Variant: dv = wsR.Cells(dRow, jCol + 2 + dz).Value
                    On Error Resume Next
                    Dim dvNum As Double: dvNum = 0
                    If IsNumeric(dv) Then dvNum = CDbl(dv)
                    On Error GoTo 0
                    If dvNum > 0 Then destVals(dz) = dvNum Else destVals(dz) = 0
                Next dz

                Dim effAtk As String: effAtk = "null"
                Dim totAtk As String: totAtk = "0"
                Dim ptsAtk As String: ptsAtk = "null"
                Dim slashAtk As String: slashAtk = "0"
                Dim errAtk As String: errAtk = "0"

                Dim comboStatCol As Integer: comboStatCol = -1
                Dim comboStatBase As Integer: comboStatBase = 36
                Select Case UCase(comboStr)
                    Case "X8": comboStatCol = 8:  comboStatBase = 36
                    Case "X5": comboStatCol = 15: comboStatBase = 36
                    Case "X6": comboStatCol = 22: comboStatBase = 36
                    Case "X1": comboStatCol = 29: comboStatBase = 36
                    Case "X7": comboStatCol = 36: comboStatBase = 36
                    Case "XP": comboStatCol = 43: comboStatBase = 36
                    Case "V8": comboStatCol = 8:  comboStatBase = 51
                    Case "V5": comboStatCol = 15: comboStatBase = 51
                    Case "V6": comboStatCol = 22: comboStatBase = 51
                    Case "XM": comboStatCol = 29: comboStatBase = 51
                    Case "X2": comboStatCol = 36: comboStatBase = 51
                End Select

                If comboStatCol > 0 Then
                    Dim sr As Integer
                    For sr = comboStatBase + 1 To comboStatBase + 14
                        Dim sn As Variant: sn = wsR.Cells(sr, 1).Value
                        If Not IsEmpty(sn) Then
                            Dim snClean As String: snClean = Trim(Replace(CStr(sn), Chr(160), " "))
                            If Left(snClean, Len(numJug) + 1) = numJug & " " Then
                                effAtk = SafeEff(wsR.Cells(sr, comboStatCol + 1).Value)
                                totAtk = SafeInt(wsR.Cells(sr, comboStatCol + 2).Value)
                                Dim ptsRaw As Variant: ptsRaw = wsR.Cells(sr, comboStatCol + 3).Value
                                Dim totRawI As Integer
                                If IsNumeric(totAtk) Then totRawI = CInt(totAtk)
                                If IsNumeric(ptsRaw) And totRawI > 0 Then
                                    ptsAtk = CStr(CLng(CDbl(ptsRaw) / totRawI * 100))
                                End If
                                slashAtk = SafeInt(wsR.Cells(sr, comboStatCol + 5).Value)
                                errAtk = SafeInt(wsR.Cells(sr, comboStatCol + 6).Value)
                                Exit For
                            End If
                        End If
                    Next sr
                End If

                If Not primerAtk Then ataques = ataques & ","
                ataques = ataques & "{"
                ataques = ataques & q("cod") & ":" & q(comboStr) & ","
                ataques = ataques & q("orig") & ":" & OrigZona(comboStr) & ","
                ataques = ataques & q("destinos") & ":" & Top2Destinos(destVals, destZonas) & ","
                ataques = ataques & q("eff") & ":" & effAtk & ","
                ataques = ataques & q("tot") & ":" & totAtk & ","
                ataques = ataques & q("pts") & ":" & ptsAtk & ","
                ataques = ataques & q("slash") & ":" & slashAtk & ","
                ataques = ataques & q("err") & ":" & errAtk & ","
                ataques = ataques & q("video") & ":" & GetVideoURL(numJug, comboStr)
                ataques = ataques & "}"
                primerAtk = False
SigCombo:
            Next dRow
SigGrupo:
        Next gr
        ataques = ataques & "]"

        ' ?? SAQUES ?????????????????????????????????????????????
        Dim saques As String: saques = "["
        Dim primerSaq As Boolean: primerSaq = True

        Dim saqGrupos(1, 1) As Integer
        saqGrupos(0, 0) = 21: saqGrupos(0, 1) = 26
        saqGrupos(1, 0) = 28: saqGrupos(1, 1) = 33

        Dim sg As Integer
        For sg = 0 To 1
            Dim sRow1 As Integer: sRow1 = saqGrupos(sg, 0)
            Dim sRow2 As Integer: sRow2 = saqGrupos(sg, 1)
            Dim sJCol As Integer: sJCol = -1
            Dim sSearchRow As Integer
            For sSearchRow = sRow1 To sRow2
                For col2 = 1 To 54
                    Dim sv As Variant: sv = wsR.Cells(sSearchRow, col2).Value
                    If Not IsEmpty(sv) And Not IsNull(sv) Then
                        Dim svs As String: svs = Trim(Replace(CStr(sv), Chr(160), " "))
                        If Left(svs, Len(numJug) + 1) = numJug & " " Then
                            sJCol = col2
                            Exit For
                        End If
                    End If
                Next col2
                If sJCol >= 0 Then Exit For
            Next sSearchRow
            If sJCol < 0 Then GoTo SigSaqGrupo

            Dim tiposArr(1) As String: tiposArr(0) = "SM": tiposArr(1) = "SQ"
            Dim tipoNomArr(1) As String: tipoNomArr(0) = "FLOTADO": tipoNomArr(1) = "POTENCIA"
            Dim tipoOffset(1) As Integer: tipoOffset(0) = 0: tipoOffset(1) = 3
            Dim TipoCombo(1) As String: TipoCombo(0) = "SM-FLOTADO": TipoCombo(1) = "SQ-POTENCIA"

            Dim ti As Integer
            For ti = 0 To 1
                Dim flotVals(5) As Double
                Dim origCounts(2) As Double
                Dim origZonaArr(2) As Integer
                origZonaArr(0) = 1: origZonaArr(1) = 6: origZonaArr(2) = 5

                Dim si As Integer
                For si = 0 To 2
                    Dim sRowCur As Integer: sRowCur = sRow1 + tipoOffset(ti) + si
                    Dim sz As Integer
                    Dim sdv As Variant
                    Dim sdvD As Double
                    For sz = 0 To 5
                        sdv = wsR.Cells(sRowCur, sJCol + 2 + sz).Value
                        sdvD = 0
                        If IsNumeric(sdv) Then
                            On Error Resume Next
                            sdvD = CDbl(sdv)
                            On Error GoTo 0
                        End If
                        If sdvD > 0 Then flotVals(sz) = flotVals(sz) + sdvD
                    Next sz
                    Dim origTot As Variant: origTot = wsR.Cells(sRowCur, sJCol + 8).Value
                    If IsNumeric(origTot) Then
                        On Error Resume Next
                        Dim origTotD As Double: origTotD = CDbl(origTot)
                        On Error GoTo 0
                        If origTotD > 0 Then origCounts(si) = origTotD
                    End If
                Next si

                Dim bestOrig As Integer: bestOrig = 1
                Dim bestOrigVal As Double: bestOrigVal = -1
                For si = 0 To 2
                    If origCounts(si) > bestOrigVal Then
                        bestOrigVal = origCounts(si)
                        bestOrig = origZonaArr(si)
                    End If
                Next si

                Dim saqBase As Integer
                If ti = 0 Then saqBase = 36 Else saqBase = 51
                Dim saqStatRow As Integer: saqStatRow = -1
                For sr = saqBase + 1 To saqBase + 14
                    Dim ssn As Variant: ssn = wsR.Cells(sr, 1).Value
                    If Not IsEmpty(ssn) Then
                        Dim ssnClean As String: ssnClean = Trim(Replace(CStr(ssn), Chr(160), " "))
                        If Left(ssnClean, Len(numJug) + 1) = numJug & " " Then
                            saqStatRow = sr: Exit For
                        End If
                    End If
                Next sr

                Dim sEff As String:   sEff = "null"
                Dim sTot As String:   sTot = "0"
                Dim sPts As String:   sPts = "null"
                Dim sPlus As String:  sPlus = "0"
                Dim sSlash As String: sSlash = "0"
                Dim sErr As String:   sErr = "0"

                If saqStatRow > 0 Then
                    sEff = SafeEff(wsR.Cells(saqStatRow, 2).Value)
                    sTot = SafeInt(wsR.Cells(saqStatRow, 3).Value)
                    Dim spRaw As Variant: spRaw = wsR.Cells(saqStatRow, 4).Value
                    Dim stRaw As Integer
                    If IsNumeric(sTot) Then stRaw = CInt(sTot)
                    If IsNumeric(spRaw) And stRaw > 0 Then
                        sPts = CStr(CLng(CDbl(spRaw) / stRaw * 100))
                    End If
                    sPlus = SafeInt(wsR.Cells(saqStatRow, 5).Value)
                    sSlash = SafeInt(wsR.Cells(saqStatRow, 6).Value)
                    sErr = SafeInt(wsR.Cells(saqStatRow, 7).Value)
                End If

                If Not primerSaq Then saques = saques & ","
                saques = saques & "{"
                saques = saques & q("cod") & ":" & q(tiposArr(ti)) & ","
                saques = saques & q("tipo") & ":" & q(tipoNomArr(ti)) & ","
                saques = saques & q("orig") & ":" & bestOrig & ","
                saques = saques & q("destinos") & ":" & Top2Destinos(flotVals, saqDestZonas) & ","
                saques = saques & q("eff") & ":" & sEff & ","
                saques = saques & q("tot") & ":" & sTot & ","
                saques = saques & q("pts") & ":" & sPts & ","
                saques = saques & q("plus") & ":" & sPlus & ","
                saques = saques & q("slash") & ":" & sSlash & ","
                saques = saques & q("err") & ":" & sErr & ","
                saques = saques & q("video") & ":" & GetVideoURL(numJug, TipoCombo(ti))
                saques = saques & "}"
                primerSaq = False
            Next ti
SigSaqGrupo:
        Next sg
        saques = saques & "]"

        ' ?? Escribir jugador ????????????????????????????????????
        If Not primerJug Then Print #ff, "    ,"
        Print #ff, "    {"
        Print #ff, "      " & q("num") & ": " & numJug & ","
        Print #ff, "      " & q("nombre") & ": " & q(nombreJug) & ","
        Print #ff, "      " & q("pos") & ": " & q(posJug) & ","
        Print #ff, "      " & q("color") & ": " & q(colorJug) & ","
        Print #ff, "      " & q("info") & ": {"
        Print #ff, "        " & q("bloqueo") & ": " & q(bloqueo) & ","
        Print #ff, "        " & q("defensa") & ": " & q(defensa) & ","
        Print #ff, "        " & q("pos6") & ": " & q(pos6) & ","
        Print #ff, "        " & q("pos5") & ": " & q(pos5) & ","
        Print #ff, "        " & q("pos1") & ": " & q(pos1) & ","
        Print #ff, "        " & q("extra") & ": " & q(nota)
        Print #ff, "      },"
        Print #ff, "      " & q("ataques") & ": " & ataques & ","
        Print #ff, "      " & q("saques") & ": " & saques & ","
        Print #ff, "      " & q("video") & ": " & IIf(videoURL <> "", q(videoURL), "null")
        Print #ff, "    }"
        primerJug = False

SigJug:
    Next ri

    Print #ff, "  ],"

    ' ?? ARMADOR TITULAR ?????????????????????????????????????????
    Print #ff, "  " & q("armador") & ": {"
    Print #ff, "    " & q("titular") & ": " & GenerarArmadorJSON(wsR, 68, 1, 30, 27, 69) & ","
    Print #ff, "    " & q("suplente") & ": " & GenerarArmadorJSON(wsR, 68, 14, 30, 27, 79)
    Print #ff, "  }"
    Print #ff, "};"
    Close #ff

    Application.StatusBar = False

    ' Actualizar el HTML del game plan y el index
    Call ActualizarGamePlanHTML(rival, torneo, fecha)

    MsgBox "datos_gameplan.js generado OK!" & vbCrLf & ruta, vbInformation, "CASLA VOLEY"
' ??? Generar JSON del armador ????????????????????????????????????
End Sub



Private Function LeerArchivoUTF8(ruta As String) As String
    On Error GoTo FallbackRead
    ' Metodo 1: ADODB.Stream
    Dim stream As Object
    Set stream = CreateObject("ADODB.Stream")
    stream.Open
    stream.Charset = "UTF-8"
    stream.Type = 2 ' Text directo
    stream.LoadFromFile ruta
    LeerArchivoUTF8 = stream.ReadText
    stream.Close
    Set stream = Nothing
    Exit Function
FallbackRead:
    ' Metodo 2: FileSystemObject (sin UTF-8 perfecto pero funciona)
    On Error GoTo ErrorRead
    Dim fso As Object
    Set fso = CreateObject("Scripting.FileSystemObject")
    Dim f As Object
    Set f = fso.OpenTextFile(ruta, 1, False, -2) ' -2 = default system encoding
    LeerArchivoUTF8 = f.ReadAll
    f.Close
    Set fso = Nothing
    Exit Function
ErrorRead:
    LeerArchivoUTF8 = ""
    MsgBox "Error leyendo archivo: " & ruta, vbExclamation
End Function

Private Sub EscribirArchivoUTF8(ruta As String, contenido As String)
    ' Escribir UTF-8 SIN BOM
    Dim stream As Object
    Set stream = CreateObject("ADODB.Stream")
    stream.Open
    stream.Type = 2 ' Text
    stream.Charset = "UTF-8"
    stream.WriteText contenido
    stream.Position = 0
    stream.Type = 1 ' Binary
    ' Saltar el BOM (primeros 3 bytes: EF BB BF)
    stream.Position = 3
    Dim binData() As Byte: binData = stream.Read
    stream.Close
    ' Escribir sin BOM
    Dim stream2 As Object
    Set stream2 = CreateObject("ADODB.Stream")
    stream2.Open
    stream2.Type = 1 ' Binary
    stream2.Write binData
    stream2.SaveToFile ruta, 2
    stream2.Close
    Set stream = Nothing: Set stream2 = Nothing
End Sub

Public Sub ActualizarGamePlanHTML(rival As String, torneo As String, fecha As Integer)
    Dim basePath As String: basePath = ThisWorkbook.Path & "\"

    ' Nombre del HTML: game_plan_RIVAL.html (limpio, sin tildes ni espacios)
    Dim rivalLimpio As String: rivalLimpio = LCase(Trim(rival))
    rivalLimpio = Replace(rivalLimpio, " ", "_")
    rivalLimpio = Replace(rivalLimpio, Chr(225), "a")
    rivalLimpio = Replace(rivalLimpio, Chr(233), "e")
    rivalLimpio = Replace(rivalLimpio, Chr(237), "i")
    rivalLimpio = Replace(rivalLimpio, Chr(243), "o")
    rivalLimpio = Replace(rivalLimpio, Chr(250), "u")
    rivalLimpio = Replace(rivalLimpio, Chr(241), "n")
    rivalLimpio = Replace(rivalLimpio, ".", "")
    rivalLimpio = Replace(rivalLimpio, ",", "")
    rivalLimpio = Replace(rivalLimpio, "'", "")
    If Len(rivalLimpio) > 25 Then rivalLimpio = Left(rivalLimpio, 25)

    Dim htmlNombre As String: htmlNombre = "game_plan_" & rivalLimpio & ".html"
    Dim htmlPath As String: htmlPath = basePath & htmlNombre

    ' Buscar template: primero game_plan_template.html, luego cualquier game_plan existente
    Dim templatePath As String: templatePath = basePath & "game_plan_template.html"
    If Dir(templatePath) = "" Then
        Dim existente As String: existente = Dir(basePath & "game_plan_*.html")
        If existente = "" Then
            MsgBox "No se encontro ningun game_plan_*.html como base.", vbExclamation
            Exit Sub
        End If
        templatePath = basePath & existente
    End If

    ' Leer template en UTF-8
    Dim ff As Integer
    Dim linea As String
    Dim contenido As String
    contenido = LeerArchivoUTF8(templatePath)

    ' Leer datos_gameplan.js
    Dim jsPath As String: jsPath = basePath & "datos_gameplan.js"
    Dim jsContenido As String
    jsContenido = LeerArchivoUTF8(jsPath)

    ' Reemplazar const JUGADORES en el HTML
    ' Extraer el array del JS entre "jugadores": [ y el cierre antes de "armador"
    Dim jsJugStart As Long: jsJugStart = InStr(jsContenido, Chr(34) & "jugadores" & Chr(34) & ": [")
    Dim jsArmStart As Long: jsArmStart = InStr(jsContenido, Chr(34) & "armador" & Chr(34) & ":")
    If jsJugStart > 0 And jsArmStart > 0 Then
        ' El array termina con "]," antes de "armador"
        Dim jsArrStr As String
        jsArrStr = Mid(jsContenido, jsJugStart + Len(Chr(34) & "jugadores" & Chr(34) & ": "), jsArmStart - jsJugStart - Len(Chr(34) & "jugadores" & Chr(34) & ": "))
        ' Limpiar: quitar la coma y espacio del final
        jsArrStr = Trim(jsArrStr)
        If Right(jsArrStr, 1) = "," Then jsArrStr = Left(jsArrStr, Len(jsArrStr) - 1)
        jsArrStr = Trim(jsArrStr)

        ' Reemplazar en HTML
        Dim idxJugHTML As Long: idxJugHTML = InStr(contenido, "const JUGADORES =")
        If idxJugHTML > 0 Then
            ' Encontrar fin: buscar ";" seguido de salto de linea
            Dim idxJugEnd As Long: idxJugEnd = InStr(idxJugHTML, contenido, ";" & vbCrLf)
            If idxJugEnd = 0 Then idxJugEnd = InStr(idxJugHTML, contenido, ";" & Chr(10))
            If idxJugEnd > 0 Then
                contenido = Left(contenido, idxJugHTML - 1) & _
                            "const JUGADORES = " & jsArrStr & ";" & vbCrLf & _
                            Mid(contenido, idxJugEnd + Len(";" & vbCrLf))
            End If
        End If
    End If

    ' Reemplazar const RIVAL
    Dim idxRivalHTML As Long: idxRivalHTML = InStr(contenido, "const RIVAL = {")
    If idxRivalHTML > 0 Then
        Dim idxRivalEnd As Long: idxRivalEnd = InStr(idxRivalHTML, contenido, "};" & vbCrLf)
        If idxRivalEnd = 0 Then idxRivalEnd = InStr(idxRivalHTML, contenido, "};" & Chr(10))
        If idxRivalEnd > 0 Then
            Dim nuevoRival As String
            nuevoRival = "const RIVAL = {" & vbCrLf & _
                         "  nombre: " & Chr(34) & rival & Chr(34) & "," & vbCrLf & _
                         "  info: " & Chr(34) & torneo & " . Fecha " & CStr(fecha) & Chr(34) & "," & vbCrLf & _
                         "  fecha: " & Chr(34) & CStr(fecha) & Chr(34) & vbCrLf & _
                         "};"
            contenido = Left(contenido, idxRivalHTML - 1) & nuevoRival & vbCrLf & Mid(contenido, idxRivalEnd + Len("};" & vbCrLf))
        End If
    End If

    ' Reemplazar const ARMADOR_DATA en el HTML
    ' El bloque "armador" del JS va desde "armador": { hasta el cierre del objeto principal
    Dim jsArmIni As Long: jsArmIni = InStr(jsContenido, Chr(34) & "armador" & Chr(34) & ": {")
    If jsArmIni > 0 Then
        ' Extraer el objeto armador completo (hasta el penultimo })
        ' Estrategia: tomar desde { hasta el cierre antes del }; final del JS
        Dim jsArmBrace As Long: jsArmBrace = InStr(jsArmIni, jsContenido, "{")
        ' Contar llaves para encontrar el cierre
        Dim depth As Integer: depth = 0
        Dim ci As Long
        Dim jsArmEnd As Long: jsArmEnd = 0
        For ci = jsArmBrace To Len(jsContenido)
            Dim ch As String: ch = Mid(jsContenido, ci, 1)
            If ch = "{" Then depth = depth + 1
            If ch = "}" Then
                depth = depth - 1
                If depth = 0 Then
                    jsArmEnd = ci
                    Exit For
                End If
            End If
        Next ci
        If jsArmEnd > 0 Then
            Dim jsArmObj As String
            jsArmObj = Mid(jsContenido, jsArmBrace, jsArmEnd - jsArmBrace + 1)
            ' Reemplazar en HTML
            Dim idxArmHTML As Long: idxArmHTML = InStr(contenido, "const ARMADOR_DATA=")
            If idxArmHTML = 0 Then idxArmHTML = InStr(contenido, "const ARMADOR_DATA =")
            If idxArmHTML > 0 Then
                ' Usar marcadores unicos
                Dim mArmI As String: mArmI = "/*__ARM_START__*/"
                Dim mArmF As String: mArmF = "/*__ARM_END__*/"
                Dim iArmI As Long: iArmI = InStr(contenido, mArmI)
                Dim iArmF As Long: iArmF = InStr(contenido, mArmF)
                If iArmI > 0 And iArmF > 0 Then
                    contenido = Left(contenido, iArmI - 1) & mArmI & jsArmObj & mArmF & Mid(contenido, iArmF + Len(mArmF))
                End If
            End If
        End If
    End If

    ' Guardar el nuevo HTML del partido en UTF-8
    Call EscribirArchivoUTF8(htmlPath, contenido)

    ' Actualizar index.html
    Call ActualizarIndex(basePath, htmlNombre, rival, torneo, fecha)

End Sub

Public Sub ActualizarIndex(basePath As String, htmlNombre As String, rival As String, torneo As String, fecha As Integer)
    Dim indexPath As String: indexPath = basePath & "index.html"
    If Dir(indexPath) = "" Then Exit Sub

    Dim ff As Integer
    Dim linea As String
    Dim contenido As String
    contenido = LeerArchivoUTF8(indexPath)

    ' Actualizar card principal (entre <!-- PLAN DE JUEGO --> y <!-- /PLAN DE JUEGO -->)
    Dim marcaIni As String: marcaIni = "<!-- PLAN DE JUEGO -->"
    Dim marcaFin As String: marcaFin = "<!-- /PLAN DE JUEGO -->"
    Dim idxIni As Long: idxIni = InStr(contenido, marcaIni)
    Dim idxFin As Long: idxFin = InStr(contenido, marcaFin)

    If idxIni > 0 And idxFin > 0 Then
        Dim q As String: q = Chr(34)
        Dim nuevoBloque As String
        nuevoBloque = marcaIni & vbCrLf
        nuevoBloque = nuevoBloque & "      <a href=" & q & htmlNombre & q & " class=" & q & "card" & q & " style=" & q & "--card-color:#f59e0b" & q & " id=" & q & "card-gameplan" & q & ">" & vbCrLf
        nuevoBloque = nuevoBloque & "        <div class=" & q & "card-glow" & q & "></div>" & vbCrLf
        nuevoBloque = nuevoBloque & "        <div class=" & q & "card-top" & q & ">" & vbCrLf
        nuevoBloque = nuevoBloque & "          <div class=" & q & "card-icon" & q & " style=" & q & "background:rgba(245,158,11,.1);border-color:rgba(245,158,11,.2)" & q & ">&#127919;</div>" & vbCrLf
        nuevoBloque = nuevoBloque & "          <div class=" & q & "card-badge" & q & " style=" & q & "background:rgba(245,158,11,.1);color:#f59e0b;border:1px solid rgba(245,158,11,.2)" & q & ">vs " & rival & "</div>" & vbCrLf
        nuevoBloque = nuevoBloque & "        </div>" & vbCrLf
        nuevoBloque = nuevoBloque & "        <div class=" & q & "card-body" & q & ">" & vbCrLf
        nuevoBloque = nuevoBloque & "          <div class=" & q & "card-title" & q & " style=" & q & "color:#f59e0b" & q & ">Plan de Juego</div>" & vbCrLf
        nuevoBloque = nuevoBloque & "          <div class=" & q & "card-desc" & q & ">Analisis tactico del rival. Ataques, saques y zonas preferidas por jugador.</div>" & vbCrLf
        nuevoBloque = nuevoBloque & "          <div style=" & q & "margin-top:10px;font-size:11px;color:var(--mut)" & q & ">" & torneo & " . Fecha " & CStr(fecha) & "</div>" & vbCrLf
        nuevoBloque = nuevoBloque & "        </div>" & vbCrLf
        nuevoBloque = nuevoBloque & "        <div class=" & q & "card-arrow" & q & ">&#8594;</div>" & vbCrLf
        nuevoBloque = nuevoBloque & "      </a>" & vbCrLf
        nuevoBloque = nuevoBloque & "      " & marcaFin
        contenido = Left(contenido, idxIni - 1) & nuevoBloque & Mid(contenido, idxFin + Len(marcaFin))
    End If

    ' Agregar al historial (entre <!-- HISTORIAL-GP-INI --> y <!-- HISTORIAL-GP-FIN -->)
    Dim mhIni As String: mhIni = "<!-- HISTORIAL-GP-INI -->"
    Dim mhFin As String: mhFin = "<!-- HISTORIAL-GP-FIN -->"
    Dim ihIni As Long: ihIni = InStr(contenido, mhIni)
    Dim ihFin As Long: ihFin = InStr(contenido, mhFin)

    If ihIni > 0 And ihFin > 0 Then
        ' Solo agregar si no existe ya este partido
        Dim zonaHist As String: zonaHist = Mid(contenido, ihIni, ihFin - ihIni)
        If InStr(zonaHist, htmlNombre) = 0 Then
            Dim q2 As String: q2 = Chr(34)
            Dim nuevaEntrada As String
            nuevaEntrada = "        <a href=" & q2 & htmlNombre & q2 & " class=" & q2 & "gp-item" & q2 & ">" & vbCrLf
            nuevaEntrada = nuevaEntrada & "          <div class=" & q2 & "gp-fecha" & q2 & ">F" & CStr(fecha) & "</div>" & vbCrLf
            nuevaEntrada = nuevaEntrada & "          <div class=" & q2 & "gp-info" & q2 & ">" & vbCrLf
            nuevaEntrada = nuevaEntrada & "            <div class=" & q2 & "gp-rival" & q2 & ">vs " & rival & "</div>" & vbCrLf
            nuevaEntrada = nuevaEntrada & "            <div class=" & q2 & "gp-torneo" & q2 & ">" & torneo & "</div>" & vbCrLf
            nuevaEntrada = nuevaEntrada & "          </div>" & vbCrLf
            nuevaEntrada = nuevaEntrada & "          <div class=" & q2 & "gp-arrow" & q2 & ">&#8594;</div>" & vbCrLf
            nuevaEntrada = nuevaEntrada & "        </a>" & vbCrLf
            ' Insertar al inicio del historial (mas reciente primero)
            contenido = Left(contenido, ihIni + Len(mhIni)) & vbCrLf & nuevaEntrada & Mid(contenido, ihIni + Len(mhIni) + 1)
        End If
    End If

    ' Guardar index.html en UTF-8
    Call EscribirArchivoUTF8(indexPath, contenido)

End Sub

Private Function GenerarArmadorJSON(wsR As Worksheet, baseRow As Integer, _
    colDist As Integer, colPills As Integer, colRec As Integer, _
    pillsBase As Integer) As String

    Dim nombre As String
    nombre = Trim(Replace(CStr(wsR.Cells(baseRow, colDist).Value), Chr(160), " "))

    ' Rotaciones P1,P6,P5,P4,P3,P2
    Dim posLabels(5) As String
    posLabels(0) = "P1": posLabels(1) = "P6": posLabels(2) = "P5"
    posLabels(3) = "P4": posLabels(4) = "P3": posLabels(5) = "P2"

    Dim rotJSON As String: rotJSON = "["
    Dim i As Integer
    For i = 0 To 5
        Dim f1 As Integer: f1 = baseRow + (i * 2)
        Dim f2 As Integer: f2 = baseRow + (i * 2) + 1
        Dim c As Integer: c = colDist

        Dim tot4 As Long: tot4 = SafeLng(wsR.Cells(f1, c + 2).Value)
        Dim tot3 As Long: tot3 = SafeLng(wsR.Cells(f1, c + 4).Value)
        Dim tot2 As Long: tot2 = SafeLng(wsR.Cells(f1, c + 6).Value)
        Dim tot6 As Long: tot6 = SafeLng(wsR.Cells(f1, c + 8).Value)
        Dim totR As Long: totR = SafeLng(wsR.Cells(f1, c + 10).Value)

        Dim pts4 As Long: pts4 = SafeLng(wsR.Cells(f2, c + 2).Value)
        Dim pts3 As Long: pts3 = SafeLng(wsR.Cells(f2, c + 4).Value)
        Dim pts2 As Long: pts2 = SafeLng(wsR.Cells(f2, c + 6).Value)
        Dim pts6 As Long: pts6 = SafeLng(wsR.Cells(f2, c + 8).Value)

        Dim d4 As String: d4 = DistJSON(4, tot4, pts4, totR)
        Dim d3 As String: d3 = DistJSON(3, tot3, pts3, totR)
        Dim d2 As String: d2 = DistJSON(2, tot2, pts2, totR)
        Dim d6 As String: d6 = DistJSON(6, tot6, pts6, totR)

        If i > 0 Then rotJSON = rotJSON & ","
        rotJSON = rotJSON & "{"
        rotJSON = rotJSON & q("pos") & ":" & q(posLabels(i)) & ","
        rotJSON = rotJSON & q("total") & ":" & totR & ","
        rotJSON = rotJSON & q("dist") & ":[" & d4 & "," & d3 & "," & d2 & "," & d6 & "]"
        rotJSON = rotJSON & "}"
    Next i
    rotJSON = rotJSON & "]"

    ' Pills por rotación (AD+, filas pillsBase..pillsBase+7)
    Dim pillsJSON As String: pillsJSON = "["
    Dim pillLabels(7) As String
    pillLabels(0) = "P1": pillLabels(1) = "P6": pillLabels(2) = "P5": pillLabels(3) = "P4"
    pillLabels(4) = "P3": pillLabels(5) = "P2": pillLabels(6) = "SO": pillLabels(7) = "TR"
    For i = 0 To 7
        Dim rp As Integer: rp = pillsBase + i
        Dim pEff As String: pEff = SafeEffStr(wsR.Cells(rp, colPills + 1).Value)
        Dim pTot As Long:   pTot = SafeLng(wsR.Cells(rp, colPills + 2).Value)
        Dim pPts As Long:   pPts = SafeLng(wsR.Cells(rp, colPills + 3).Value)
        Dim pPtP As String: pPtP = SafeEffStr(wsR.Cells(rp, colPills + 4).Value)
        Dim pErr As String: pErr = SafeEffStr(wsR.Cells(rp, colPills + 5).Value)
        If i > 0 Then pillsJSON = pillsJSON & ","
        pillsJSON = pillsJSON & "{"
        pillsJSON = pillsJSON & q("label") & ":" & q(pillLabels(i)) & ","
        pillsJSON = pillsJSON & q("eff") & ":" & pEff & ","
        pillsJSON = pillsJSON & q("tot") & ":" & pTot & ","
        pillsJSON = pillsJSON & q("pts") & ":" & pPts & ","
        pillsJSON = pillsJSON & q("pts_pct") & ":" & pPtP & ","
        pillsJSON = pillsJSON & q("err_pct") & ":" & pErr
        pillsJSON = pillsJSON & "}"
    Next i
    pillsJSON = pillsJSON & "]"

    ' Recepción EFF (AA col, filas pillsBase..pillsBase+5)
    Dim recLabels(5) As String
    recLabels(0) = "SO": recLabels(1) = "REC #": recLabels(2) = "REC +"
    recLabels(3) = "REC !": recLabels(4) = "REC -": recLabels(5) = "TRANS"
    Dim recJSON As String: recJSON = "["
    For i = 0 To 5
        Dim rr As Integer: rr = pillsBase + i
        Dim rEff As String: rEff = SafeEffStr(wsR.Cells(rr, colRec + 1).Value)
        If i > 0 Then recJSON = recJSON & ","
        recJSON = recJSON & "{" & q("label") & ":" & q(recLabels(i)) & "," & q("eff") & ":" & rEff & "}"
    Next i
    recJSON = recJSON & "]"

    ' SO y TR acumulado
    ' SO: colDist cols +0,+2,+4 filas baseRow+12/+13/+14/+15
    ' TR: colDist cols +6,+8,+10
    Dim soJSON As String: soJSON = GenerarSOTRJSON(wsR, baseRow + 12, colDist, "SO")
    Dim trJSON As String: trJSON = GenerarSOTRJSON(wsR, baseRow + 12, colDist + 6, "TR")

    ' Ensamblar
    GenerarArmadorJSON = "{"
    GenerarArmadorJSON = GenerarArmadorJSON & q("nombre") & ":" & q(nombre) & ","
    GenerarArmadorJSON = GenerarArmadorJSON & q("rotaciones") & ":" & rotJSON & ","
    GenerarArmadorJSON = GenerarArmadorJSON & q("pills") & ":" & pillsJSON & ","
    GenerarArmadorJSON = GenerarArmadorJSON & q("recepcion") & ":" & recJSON & ","
    GenerarArmadorJSON = GenerarArmadorJSON & q("so") & ":" & soJSON & ","
    GenerarArmadorJSON = GenerarArmadorJSON & q("tr") & ":" & trJSON
    GenerarArmadorJSON = GenerarArmadorJSON & "}"

End Function

Private Function DistJSON(zona As Integer, tot As Long, pts As Long, totR As Long) As String
    Dim pctD As Long: If totR > 0 Then pctD = CLng(tot * 100 / totR) Else pctD = 0
    Dim pctP As Long: If tot > 0 Then pctP = CLng(pts * 100 / tot) Else pctP = 0
    DistJSON = "{" & q("zona") & ":" & zona & "," & q("tot") & ":" & tot & "," & _
               q("pts") & ":" & pts & "," & q("pct") & ":" & pctD & "," & _
               q("pct_p") & ":" & pctP & "}"
End Function

Private Function GenerarSOTRJSON(wsR As Worksheet, baseRow As Integer, colStart As Integer, label As String) As String
    ' baseRow = fila 80 (SIDE OUT/TRANSITION header)
    ' Datos en baseRow+1 (tot) y baseRow+2 (pts) por zona
    Dim c As Integer: c = colStart
    Dim tot4 As Long: tot4 = SafeLng(wsR.Cells(baseRow + 1, c).Value)
    Dim pts4 As Long: pts4 = SafeLng(wsR.Cells(baseRow + 2, c).Value)
    Dim tot3 As Long: tot3 = SafeLng(wsR.Cells(baseRow + 1, c + 2).Value)
    Dim pts3 As Long: pts3 = SafeLng(wsR.Cells(baseRow + 2, c + 2).Value)
    Dim tot2 As Long: tot2 = SafeLng(wsR.Cells(baseRow + 1, c + 4).Value)
    Dim pts2 As Long: pts2 = SafeLng(wsR.Cells(baseRow + 2, c + 4).Value)
    Dim tot8 As Long: tot8 = SafeLng(wsR.Cells(baseRow + 3, c + 2).Value)
    Dim pts8 As Long: pts8 = SafeLng(wsR.Cells(baseRow + 4, c + 2).Value)
    Dim tot9 As Long: tot9 = SafeLng(wsR.Cells(baseRow + 3, c + 4).Value)
    Dim pts9 As Long: pts9 = SafeLng(wsR.Cells(baseRow + 4, c + 4).Value)
    Dim totT As Long: totT = tot4 + tot3 + tot2 + tot8 + tot9
    Dim d4 As String: d4 = DistJSON(4, tot4, pts4, totT)
    Dim d3 As String: d3 = DistJSON(3, tot3, pts3, totT)
    Dim d2 As String: d2 = DistJSON(2, tot2, pts2, totT)
    Dim d8 As String: d8 = DistJSON(8, tot8, pts8, totT)
    Dim d9 As String: d9 = DistJSON(9, tot9, pts9, totT)
    GenerarSOTRJSON = "{" & q("label") & ":" & q(label) & "," & _
                      q("total") & ":" & totT & "," & _
                      q("dist") & ":[" & d4 & "," & d3 & "," & d2 & "," & d8 & "," & d9 & "]}"
End Function

Private Function SafeLng(v As Variant) As Long
    On Error Resume Next
    Dim n As Long: n = 0
    If IsNumeric(v) Then n = CLng(CDbl(v))
    On Error GoTo 0
    SafeLng = n
End Function

Private Function SafeEffStr(v As Variant) As String
    On Error Resume Next
    If IsNumeric(v) Then
        SafeEffStr = CStr(CLng(CDbl(v) * 100))
    Else
        SafeEffStr = "null"
    End If
    On Error GoTo 0
End Function


' ============================================================
' POBLAR VIDEOS DEL RIVAL AUTOMÁTICAMENTE
' Lee BK4:BL15 de la hoja rival y puebla VIDEOS_RIVAL
' ============================================================

Sub PoblarVideosRival()
    Dim wsExp As Worksheet
    Set wsExp = ThisWorkbook.Sheets("EXPORTAR")
    
    ' Obtener hoja del rival desde EXPORTAR
    Dim hojaRival As String
    hojaRival = Trim(CStr(wsExp.Cells(6, 3).Value))
    Dim rival As String
    rival = Trim(CStr(wsExp.Cells(3, 3).Value))
    
    If hojaRival = "" Then
        MsgBox "Completá la hoja EXPORTAR con el nombre del rival.", vbExclamation
        Exit Sub
    End If
    
    Dim wsR As Worksheet
    On Error Resume Next
    Set wsR = ThisWorkbook.Sheets(hojaRival)
    On Error GoTo 0
    
    If wsR Is Nothing Then
        MsgBox "No se encontró la hoja: " & hojaRival, vbExclamation
        Exit Sub
    End If
    
    ' Crear o limpiar hoja VIDEOS_RIVAL
    Dim wsV As Worksheet
    Dim nombreHoja As String
    nombreHoja = "VIDEOS_" & UCase(Left(hojaRival, 10))
    
    ' Verificar si la hoja ya existe
    Dim hojaExiste As Boolean
    hojaExiste = False
    Dim sh As Worksheet
    For Each sh In ThisWorkbook.Sheets
        If sh.Name = nombreHoja Then
            hojaExiste = True
            Set wsV = sh
            Exit For
        End If
    Next sh
    
    If Not hojaExiste Then
        Set wsV = ThisWorkbook.Sheets.Add(After:=ThisWorkbook.Sheets(ThisWorkbook.Sheets.Count))
        wsV.Name = nombreHoja
    Else
        wsV.Cells.Clear
    End If
    
    ' Combos por posición (igual que CASLA)
    ' CENTRAL: X1, X7, XM, XP
    ' PUNTA: X5, V5, X6, V6, SM-FLOTADO, SQ-POTENCIA
    ' OPUESTO: X8, V8, X9, XM
    ' ARMADOR: SM-FLOTADO, SQ-POTENCIA, SJ-JUMP
    ' LIBERO: Recepción
    
    ' Colores
    Dim colorRojo As Long: colorRojo = RGB(232, 25, 44)
    Dim colorOscuro As Long: colorOscuro = RGB(7, 8, 15)
    Dim colorCard As Long: colorCard = RGB(13, 14, 26)
    Dim colorHeader As Long: colorHeader = RGB(17, 18, 32)
    Dim colorBlanco As Long: colorBlanco = RGB(226, 232, 240)
    Dim colorMut As Long: colorMut = RGB(71, 85, 105)
    Dim colorVerde As Long: colorVerde = RGB(34, 197, 94)
    
    ' TÍTULO
    wsV.Range("A1:G1").Merge
    wsV.Cells(1, 1).Value = "VIDEOS POR COMBINACIÓN  " & UCase(rival)
    wsV.Cells(1, 1).Interior.Color = colorCard
    wsV.Cells(1, 1).Font.Color = colorRojo
    wsV.Cells(1, 1).Font.Bold = True
    wsV.Cells(1, 1).Font.Size = 13
    wsV.Cells(1, 1).HorizontalAlignment = xlCenter
    wsV.Rows(1).RowHeight = 30
    
    wsV.Range("A2:G2").Merge
    wsV.Cells(2, 1).Value = "Pegá el link de YouTube (no listado) en la columna F para cada combinación"
    wsV.Cells(2, 1).Interior.Color = colorCard
    wsV.Cells(2, 1).Font.Color = colorMut
    wsV.Cells(2, 1).Font.Size = 9
    wsV.Cells(2, 1).HorizontalAlignment = xlCenter
    wsV.Rows(2).RowHeight = 18
    
    wsV.Rows(3).RowHeight = 6
    
    ' ENCABEZADOS
    Dim encabezados As Variant
    encabezados = Array("#", "JUGADOR", "POSICIÓN", "COD COMBO / SAQUE", "TIPO", "URL VIDEO", "ESTADO")
    Dim c As Integer
    For c = 0 To 6
        wsV.Cells(4, c + 1).Value = encabezados(c)
        wsV.Cells(4, c + 1).Interior.Color = colorOscuro
        wsV.Cells(4, c + 1).Font.Color = RGB(255, 255, 255)
        wsV.Cells(4, c + 1).Font.Bold = True
        wsV.Cells(4, c + 1).Font.Size = 10
        wsV.Cells(4, c + 1).HorizontalAlignment = xlCenter
    Next c
    wsV.Rows(4).RowHeight = 22
    
    ' Anchos de columna
    wsV.Columns("A").ColumnWidth = 8
    wsV.Columns("B").ColumnWidth = 20
    wsV.Columns("C").ColumnWidth = 14
    wsV.Columns("D").ColumnWidth = 18
    wsV.Columns("E").ColumnWidth = 12
    wsV.Columns("F").ColumnWidth = 50
    wsV.Columns("G").ColumnWidth = 14
    
    ' Leer jugadores del rival desde BK4:BL15
    Dim filaActual As Integer
    filaActual = 5
    Dim i As Integer
    
    For i = 4 To 15
        Dim nombre As String
        Dim posicion As String
        nombre = Trim(CStr(wsR.Cells(i, 63).Value))  ' BK
        posicion = Trim(CStr(wsR.Cells(i, 64).Value))  ' BL
        
        If nombre = "" Then GoTo SiguienteJugador
        
        ' Determinar combos por posición
        Dim combos() As String
        Dim tipos() As String
        
        Select Case UCase(posicion)
            Case "CENTRAL"
                combos = Split("X1|X2|X7|XM|SM-FLOTADO|SQ-POTENCIA", "|")
                tipos = Split("ATAQUE|ATAQUE|ATAQUE|ATAQUE|SAQUE|SAQUE", "|")
            Case "PUNTA"
                combos = Split("X5|V5|X6|V6|XP|SM-FLOTADO|SQ-POTENCIA", "|")
                tipos = Split("ATAQUE|ATAQUE|ATAQUE|ATAQUE|ATAQUE|SAQUE|SAQUE", "|")
            Case "OPUESTO"
                combos = Split("X5|V5|X6|V6|X8|V8|SM-FLOTADO|SQ-POTENCIA", "|")
                tipos = Split("ATAQUE|ATAQUE|ATAQUE|ATAQUE|ATAQUE|ATAQUE|SAQUE|SAQUE", "|")
            Case "ARMADOR"
                combos = Split("SM-FLOTADO|SQ-POTENCIA|SJ-JUMP", "|")
                tipos = Split("SAQUE|SAQUE|SAQUE", "|")
            Case "LIBERO"
                combos = Split("Recepción|SM-FLOTADO|SQ-POTENCIA", "|")
                tipos = Split("RECEPCIÓN|SAQUE|SAQUE", "|")
            Case Else
                combos = Split("SM-FLOTADO|SQ-POTENCIA", "|")
                tipos = Split("SAQUE|SAQUE", "|")
        End Select
        
        ' Primera fila: nombre y primer combo
        Dim colorFila As Long
        If (i Mod 2) = 0 Then
            colorFila = RGB(10, 11, 24)
        Else
            colorFila = RGB(13, 14, 26)
        End If
        
        Dim j As Integer
        For j = 0 To UBound(combos)
            ' Col A: número de jugador (solo primera fila)
            If j = 0 Then
                wsV.Cells(filaActual, 1).Value = nombre
            End If
            
            ' Col B: nombre (solo primera fila del jugador)
            If j = 0 Then
                wsV.Cells(filaActual, 2).Value = nombre
                wsV.Cells(filaActual, 2).Font.Bold = True
            End If
            
            ' Col C: posición (solo primera fila)
            If j = 0 Then
                wsV.Cells(filaActual, 3).Value = posicion
            End If
            
            ' Col D: combo
            wsV.Cells(filaActual, 4).Value = combos(j)
            
            ' Col E: tipo
            wsV.Cells(filaActual, 5).Value = tipos(j)
            
            ' Col G: fórmula estado
            wsV.Cells(filaActual, 7).Formula = "=IF(F" & filaActual & "="""","""",""? Listo"")"
            wsV.Cells(filaActual, 7).Font.Color = colorVerde
            wsV.Cells(filaActual, 7).HorizontalAlignment = xlCenter
            
            ' Formato fila
            For c = 1 To 7
                wsV.Cells(filaActual, c).Interior.Color = colorFila
                wsV.Cells(filaActual, c).Font.Color = colorBlanco
                wsV.Cells(filaActual, c).Font.Size = 10
                wsV.Cells(filaActual, c).RowHeight = 20
            Next c
            
            filaActual = filaActual + 1
        Next j
        
        ' Fila separadora
        filaActual = filaActual + 1
        
SiguienteJugador:
    Next i
    
    ' Activar la hoja
    wsV.Activate
    wsV.Cells(1, 1).Select
    
    MsgBox "? Hoja " & nombreHoja & " generada con " & (filaActual - 5) & " filas." & Chr(10) & Chr(10) & _
           "Pegá los links de YouTube en la columna F.", vbInformation, "CASLA Voley"
End Sub



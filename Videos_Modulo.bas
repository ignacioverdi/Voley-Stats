
Attribute VB_Name = "Videos_Modulo"
Option Explicit

Sub GenerarVideosJS()
    Dim ws As Worksheet
    Dim fso As Object, f As Object
    Dim path As String
    Dim js As String
    Dim i As Integer
    Dim num As String, jugador As String, partido As String
    Dim categoria As String, titulo As String, url As String
    Dim catCod As String
    Dim primerItem As Boolean
    Dim totalVideos As Integer
    
    Set ws = ThisWorkbook.Sheets("VIDEOS")
    Set fso = CreateObject("Scripting.FileSystemObject")
    
    path = ThisWorkbook.Path & "\datos_videos.js"
    
    ' Contar videos validos
    totalVideos = 0
    For i = 5 To ws.Cells(ws.Rows.Count, 6).End(xlUp).Row + 1
        If ws.Cells(i, 6).Value <> "" And ws.Cells(i, 2).Value <> "" Then
            totalVideos = totalVideos + 1
        End If
    Next i
    
    If totalVideos = 0 Then
        MsgBox "No hay videos cargados. Completar columnas B, C, D, E y F.", vbExclamation
        Exit Sub
    End If
    
    ' Generar JS
    Dim fecha As String
    fecha = Format(Now, "DD/MM/YYYY")
    
    js = "// ================================================================" & Chr(10)
    js = js & "// CASLA VOLEY - Videos por jugador y partido" & Chr(10)
    js = js & "// Generado: " & fecha & " | Total: " & totalVideos & " videos" & Chr(10)
    js = js & "// ================================================================" & Chr(10)
    js = js & "window.VIDEOS_DATA = {" & Chr(10)
    js = js & "  ""generado"": """ & fecha & """," & Chr(10)
    js = js & "  ""videos"": [" & Chr(10)
    
    primerItem = True
    For i = 5 To ws.Cells(ws.Rows.Count, 6).End(xlUp).Row + 1
        jugador = Trim(ws.Cells(i, 2).Value)
        partido = Trim(ws.Cells(i, 3).Value)
        categoria = Trim(ws.Cells(i, 4).Value)
        titulo = Trim(ws.Cells(i, 5).Value)
        url = Trim(ws.Cells(i, 6).Value)
        catCod = Trim(ws.Cells(i, 7).Value)
        
        If url = "" Or jugador = "" Then GoTo Siguiente
        If titulo = "" Then titulo = "Video " & (i - 4)
        If catCod = "" Then catCod = "G"
        
        ' Extraer numero de jugador (primeros 2 chars antes del guion)
        Dim numJug As Integer
        numJug = 0
        If InStr(jugador, "-") > 0 Then
            On Error Resume Next
            numJug = CInt(Trim(Left(jugador, InStr(jugador, "-") - 1)))
            On Error GoTo 0
        End If
        
        Dim nombreJug As String
        nombreJug = ""
        If InStr(jugador, "-") > 0 Then
            nombreJug = Trim(Mid(jugador, InStr(jugador, "-") + 1))
        Else
            nombreJug = jugador
        End If
        
        If Not primerItem Then js = js & "," & Chr(10)
        primerItem = False
        
        js = js & "    {" & Chr(10)
        js = js & "      ""jugador_num"": " & numJug & "," & Chr(10)
        js = js & "      ""jugador"": """ & LimpiarTexto(nombreJug) & """," & Chr(10)
        js = js & "      ""partido"": """ & LimpiarTexto(partido) & """," & Chr(10)
        js = js & "      ""categoria"": """ & catCod & """," & Chr(10)
        js = js & "      ""titulo"": """ & LimpiarTexto(titulo) & """," & Chr(10)
        js = js & "      ""url"": """ & LimpiarTexto(url) & """" & Chr(10)
        js = js & "    }"
        
Siguiente:
    Next i
    
    js = js & Chr(10) & "  ]" & Chr(10) & "};" & Chr(10)
    
    ' Guardar archivo
    Set f = fso.CreateTextFile(path, True, False)
    f.Write js
    f.Close
    
    MsgBox "✅ datos_videos.js generado con " & totalVideos & " videos." & Chr(10) & Chr(10) & _
           "Archivo: " & path & Chr(10) & Chr(10) & _
           "Ahora subilo a GitHub para que aparezcan en Vercel.", vbInformation, "CASLA Voley"
End Sub

Function LimpiarTexto(txt As String) As String
    Dim resultado As String
    resultado = txt
    resultado = Replace(resultado, Chr(34), "'")
    resultado = Replace(resultado, Chr(10), " ")
    resultado = Replace(resultado, Chr(13), " ")
    LimpiarTexto = resultado
End Function

Sub AgregarPartido()
    ' Agrega un partido nuevo a la lista desplegable
    Dim nuevoPartido As String
    nuevoPartido = InputBox("Ingresa el nuevo partido (ej: 26/05/2026 vs DBANF):", "Nuevo Partido")
    If nuevoPartido = "" Then Exit Sub
    
    Dim ws As Worksheet
    Set ws = ThisWorkbook.Sheets("REFS")
    
    ' Buscar ultima fila usada en col D de REFS
    Dim ultimaFila As Long
    ultimaFila = ws.Cells(ws.Rows.Count, "D").End(xlUp).Row + 1
    ws.Cells(ultimaFila, 4).Value = nuevoPartido
    
    MsgBox "Partido agregado. Refresca el desplegable de la columna C.", vbInformation
End Sub

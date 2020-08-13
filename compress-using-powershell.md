Add-Type -A System.IO.Compression.FileSystem
[IO.Compression.ZipFile]::CreateFromDirectory('foo', 'foo.zip')
[IO.Compression.ZipFile]::ExtractToDirectory('foo.zip', 'bar')

#firstcomment
$data  = (invoke-restmethod https://www.reddit.com/r/worldnews/.rss).title 
$index = 0


$Random = New-Object System.Random

($data | ForEach-Object { "{0} - /xx\ - {1}" -f ($index++).ToString(" 00") , $_ }) -split '' |
  ForEach-Object{
    Write-Host $_ -nonew
    Start-Sleep -milliseconds $(1 + $Random.Next(2))
   }
# Plurk_Image-Metadata-Converter
  
## 怎麼辦到的
以噗浪圖片儲存邏輯，進行 BASE62 演算後，解算出使用者 UID 進行查詢

正在摸索噗浪維修後的圖片儲存邏輯，新版何時完工？When It's Done It's Done

## 實際限制
僅能辨識從噗浪的圖床辨識上傳者，如果發文者沒有上傳圖片則無法識別
僅能辨識圖片上傳者，如果發文者使用他人圖片，偷偷說探針無法識別

噗浪官方於 6 月 28 日晚間的後端維修後，圖片儲存邏輯改變，目前無法識別新上傳的圖片，但舊有圖片依然可以識別
目前不確定噗浪官方是否會修改所有圖片，所以偷偷說探針隨時可能失效

## 使用說明
看到網頁你就懂了

## 免責說明
不鼓勵刺探他人隱私，僅作為驗證噗浪後端系統儲存邏輯的概念性工具

## 開發目的  
我看見業火在燃燒
![ScreenShot](http://i.imgur.com/uVkyMfN.gif)  

## 資源
- Base62 encoder and decoder for arbitrary data https://github.com/tuupola/base62
- Base-62 UUID generator https://github.com/shanehughes3/uuid62
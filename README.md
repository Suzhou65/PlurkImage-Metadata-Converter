# PlurkImage-Metadata-Converter
[![css](https://github.takahashi65.info/lib_badge/uses-css.svg)](https://www.w3.org/Style/CSS/) 
[![html](https://github.takahashi65.info/lib_badge/uses-html.svg)](https://html.spec.whatwg.org/)
[![js](https://github.takahashi65.info/lib_badge/uses-js.svg)](https://www.javascript.com/)

## Contents
- [PlurkImage-Metadata-Converter](#plurkimage-metadata-converter)
  * [Contents](#Contents)
  * [Live Demo](#live-Demo)
  * [How it works](#how-it-works)
  * [Operating Restrictions](#operating-restrictions)
  * [Disclaimer](#disclaimer)
  * [Development Purpose](#development-purpose)
  * [Resources](#resources)
  * [Thanks](#thanks)
  * [Troll](#troll)

## Live Demo
使用說明? [看到網頁你就懂了](https://takahashi65.info/plurk/anonymous_probe.html)
  
## How it works
以噗浪圖片儲存邏輯，進行 BASE62 演算後，解算出使用者 UID 進行查詢  
  
正在摸索噗浪維修後的圖片儲存邏輯，新版何時完工？When It's Done It's Done  

## Operating Restrictions
```diff
+ 僅能辨識從噗浪的圖床辨識上傳者
- 如果發文者沒有上傳圖片則無法識別
+ 僅能辨識圖片上傳者
- 如果發文者使用他人圖片，本工具無法識別
- 噗浪官方於 2018.6.28 晚間的後端維修後，圖片儲存邏輯改變，目前無法識別新上傳的圖片
+ 但舊有圖片依然可以識別
```

## Disclaimer
**本工具不鼓勵刺探他人隱私，僅作為驗證噗浪後端系統儲存邏輯的概念性工具**  
本工具生成的網頁會提供其他網站的網路連結，您也可經由本工具所提供的連結，點選進入其他網站，但該連結網站不適用本工具的免責說明，您必須參考該連結網站中的隱私權保護政策

## Development Purpose  
偷偷說已經從一開始的娛樂與讓人講出一些實際身分不方便講出來的東西，變質為惡意潑糞跟散播惡意內容的媒介  
![ScreenShot](https://github.takahashi65.info/lib_img/github_this_is_fine.png)  

以噗浪駭客勳章為誓，為了蔚藍清淨的噗浪  
![ScreenShot](https://github.takahashi65.info/lib_img/github_Plurk_icon.png)  

## Resources
- [Base62 encoder and decoder for arbitrary data](https://github.com/tuupola/base62)  
- [Base-62 UUID generator](https://github.com/shanehughes3/uuid62) 

## Thanks
- [DoTaMoonNight](https://www.plurk.com/DoTaMoonNight)   
概念驗證與快速演示範例

## Troll
- [我看見業火在燃燒](https://www.plurk.com/p/mty8zp)  
年輕人終究是年輕人
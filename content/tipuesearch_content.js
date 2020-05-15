var tipuesearch = {"pages": [{'title': '有關本網站', 'text': '本網站是由虎尾科技大學精密機械工程科學生製作。 \n 這門課程在教導學員如何利用網際環境管理與工程應用相關的內容管理， \n 總共使用兩套網際內容管理系統: \n https://github.com/mdecourse/cmsimde \n https://www.blogger.com/ \n 本人 Repository (倉儲): https://github.com/50833105/wcmj2020 \n 本人 Web si \xa0 (網站): 本班Gitter (討論區):\xa0 https://gitter.im/mdecourse/wcmj2020 \xa0 \n', 'tags': '', 'url': '有關本網站.html'}, {'title': '主題', 'text': '', 'tags': '', 'url': '主題.html'}, {'title': 'Week 6', 'text': 'Online education \n 線上直播: Youtube + Portable OBS \n 線上開會: \xa0 https://meet.google.com \xa0 \n \n 讓手機可以利用電腦熱點上網 \n 採用\xa0 https://www.tp-link.com/us/home-networking/usb-adapter/tl-wn725n/ \n 將此一 USB Wifi adapter 連接電腦後, 若網路為 IPv4 協定時, 可以透過"設定 -> 網路和網際網路 -> 行動熱點", 選擇開啟並編輯"網路名稱與網路密碼"後, 讓至多 8 台手機透過熱點連線上網. \n 但是因為目前 Windows 10 並 未提供 IPv6 網路協定下的網路熱點功能 , 因此在純 IPv6 網路協定下無法使用"行動熱點"服務. \n \n 利用手機鏡頭當作 webcam: \n Android: \xa0 https://www.digitalcitizen.life/turn-android-smartphone-webcam-windows \xa0 iPhone: \xa0 https://www.makeuseof.com/tag/use-your-iphone-as-a-webcam-heres-how-ios/ \xa0 \n \n 需要 clone 個人倉儲時: \n git clone --recurse-submodules 倉儲_url.git \n 例如:\xa0git clone --recurse-submodules \xa0 https://github.com/mdecourse/wcmj2020.git \n 現場直播的 audio 錄音設定 \n 在電腦輔助設計室進行直播時, 由於現場有擴音設備, 因此採用 OBS 串流至 Youtube 的最佳收音並非從 Webcam 的麥克風, 而是從擴音器以 audio outpu 連接到電腦的麥克風插槽, 然後將 OBS 的 audio 設定為從電腦的麥克風收音. \n \n \n', 'tags': '', 'url': 'Week 6.html'}, {'title': 'Week 7', 'text': '下載可攜程式系統 \n \n 利用 git 指令建立 cmsimde 網站 \n \n', 'tags': '', 'url': 'Week 7.html'}, {'title': 'Week 8', 'text': '請重新下載 \xa0 wcmj2020_tool.7z , 檔案大小為 435 MB, 解開壓縮後為 1.8 GB (其中包括 Mypaint, Dia 與 OBS 等). \n 學會利用 ShareX 與 OBS 拍攝螢幕操作影片, 並將個人維護倉儲與網站的過程影片放入個人網站中. \n', 'tags': '', 'url': 'Week 8.html'}, {'title': 'Week 9', 'text': '', 'tags': '', 'url': 'Week 9.html'}, {'title': '電腦軟硬體簡介', 'text': '硬體；可觸摸到的，例如:鍵盤、滑鼠 \n 主機:包含主機板、記憶體、顯示卡、插孔等等 \n 軟體；不可觸摸到的，例如:office系統 \n 作業系統；Windows(記事本、接龍、踩地雷) \n 應用軟體、商用軟體、共享軟體(免費，但有限時或功能限制)、綠色軟體(免費免安裝的軟體) \n', 'tags': '', 'url': '電腦軟硬體簡介.html'}, {'title': '網路架構與設定的簡介', 'text': '網際網路:每台電腦都有IP位置(編號)。 \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0實體建置:集線器或網路交換器。 \n 網路設定:由設定>乙太網路或WIFI>網路和共用中心>內容>調整IPv4之IP及DNS \n 設定Proxy(視情況所需) \n', 'tags': '', 'url': '網路架構與設定的簡介.html'}, {'title': 'Week 10', 'text': '', 'tags': '', 'url': 'Week 10.html'}, {'title': '以SSH維護倉儲', 'text': '1.下載PuTTY: https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html \n 2. 利用 y:\\portablegit\\bin\\sh.exe 進入 shell 命令環境後, 以\xa0 \n \n \n \n \n \n \n 1 \n \n \n \n ssh-keygen -t rsa -b 4096 -C  "使用者學號" \n \n \n \n \n \n \n \n 在 /y/home/.ssh 目錄下建立 id_rsa 與 id_rsa.pub 等 private key 與 public key \n 之後以 SciTE 開啟 id_rsa.pub 後, 將此 public key 的內容, 以新增添加到 Github.com 帳號下 personal settings -> SSH and GPG keys 頁面下. \n 3. 接下來要利用 puttygen.exe 將 id_rsa 轉為 Putty 可以解讀的 .ppk 格式, 並修改隨身系統的啟動批次檔案, 指定利用 putty 目錄下的 plink 執行 git 指令的網路代理設定. \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n \n \n \n 修改啟動的 start.bat 加入下列設定: \n \xa0 \n set GIT_HOME=%Disk%:\\portablegit\\bin\\ \n set GIT_SSH=%Disk%:\\putty\\plink.exe \n \n \n \n \n \n \n \n 4. 利用 puttygen.exe 載入第二步驟所建立的 private key, 也就是 id_rsa. \n 開啟 puttygen 之後, 以右下方的 load 載入 id_rsa, 成功載入後, 利用 save private key 按鈕, 將已經轉為 putty 格式的 .ppk 存檔. 此一 .ppk 檔案必須在設定 putty 中 github.com session 時, 在 Connection->SSH->Auth 項目下, 將轉檔後的 .ppk 指向 private key file for authentication 欄位.\xa0 \n 並在 Connection->Proxy 項目下, 指定 Proxy type: HTTP, 並將 IPv6 代理主機設為 ::53 或 ::42 埠號設為 3128. \n 5. 之後確定 home 下的 .ssh 目錄中的 config 設定檔案為: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n \n \n \n # no proxy at home \n #ProxyCommand y:/PortableGit/mingw64/bin/connect.exe -H proxy.mde.nfu.edu.tw:3128 %h %p \n # set git_ssh=y:/putty/plink.exe with auth under putty github.com session setup \n ProxyCommand y:/putty/plink.exe github.com %h %p \n \xa0 \xa0 \n Host github.com \n \xa0\xa0\xa0\xa0 User git \n \xa0\xa0\xa0\xa0 Port 22 \n \xa0\xa0\xa0\xa0 Hostname github.com \n \xa0\xa0\xa0\xa0 \xa0 \n \xa0\xa0\xa0\xa0 # for connect.exe need openssh key format \n \xa0\xa0\xa0\xa0 #IdentityFile "y:\\home\\.ssh\\id_rsa_mdecourse" \n \xa0\xa0\xa0\xa0 # for plink.exe need rsa key format but set under putty github.com session \n \xa0\xa0\xa0\xa0 # plink.exe do not need the following setting \n \xa0\xa0\xa0\xa0 #IdentityFile "y:\\home\\.ssh\\mdecourse_putty_private.ppk" \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 TCPKeepAlive yes \n \xa0\xa0\xa0\xa0 IdentitiesOnly yes \n \n \n \n \n \n \n \n 6. 最後再將 wcmj2020 倉儲中 .git 目錄下的 config 檔案中的連線協定, 由 https 改為採 ssh 連線: 範例如下: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n \n \n \n [core] \n \xa0\xa0\xa0\xa0 repositoryformatversion = 0 \n \xa0\xa0\xa0\xa0 filemode =  false \n \xa0\xa0\xa0\xa0 bare =  false \n \xa0\xa0\xa0\xa0 logallrefupdates =  true \n \xa0\xa0\xa0\xa0 symlinks =  false \n \xa0\xa0\xa0\xa0 ignorecase =  true \n [submodule] \n \xa0\xa0\xa0\xa0 active = . \n [remote  "origin" ] \n \xa0\xa0\xa0\xa0 #url = https://github.com/mdecourse/wcmj2020.git \n \xa0\xa0\xa0\xa0 url = git@github.com:mdecourse/wcmj2020.git \n \xa0\xa0\xa0\xa0 fetch = +refs/heads/*:refs/remotes/origin/* \n [branch  "master" ] \n \xa0\xa0\xa0\xa0 remote = origin \n \xa0\xa0\xa0\xa0 merge = refs/heads/master \n [submodule  "cmsimde" ] \n \xa0\xa0\xa0\xa0 url = https: //github.com/mdecourse/cmsimde.git \n \n \n \n \n \n \n \n 之後就可以透過近端的 .ppk private key 與 Github.com 上的 public key 對應, 無需輸入帳號密碼就可以進行 git push \n', 'tags': '', 'url': '以SSH維護倉儲.html'}, {'title': 'Week 11', 'text': '', 'tags': '', 'url': 'Week 11.html'}, {'title': '資料來源', 'text': 'Web si (網站te):\xa0 https://mde.tw/wcmj2020 \xa0 \n 指導老師:嚴家銘', 'tags': '', 'url': '資料來源.html'}]};
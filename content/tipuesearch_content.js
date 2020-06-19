var tipuesearch = {"pages": [{'title': '有關本網站', 'text': '本網站是由虎尾科技大學精密機械工程科學生製作。 \n 這門課程在教導學員如何利用網際環境管理與工程應用相關的內容管理， \n 總共使用兩套網際內容管理系統: \n https://github.com/mdecourse/cmsimde \n https://www.blogger.com/ \n 本人 Repository (倉儲): https://github.com/50833105/wcmj2020 \n 本人 Web si \xa0 (網站): 本班Gitter (討論區):\xa0 https://gitter.im/mdecourse/wcmj2020 \xa0 \n', 'tags': '', 'url': '有關本網站.html'}, {'title': '主題', 'text': '', 'tags': '', 'url': '主題.html'}, {'title': 'Week 6', 'text': 'Online education \n 線上直播: Youtube + Portable OBS \n 線上開會: \xa0 https://meet.google.com \xa0 \n \n 讓手機可以利用電腦熱點上網 \n 採用\xa0 https://www.tp-link.com/us/home-networking/usb-adapter/tl-wn725n/ \n 將此一 USB Wifi adapter 連接電腦後, 若網路為 IPv4 協定時, 可以透過"設定 -> 網路和網際網路 -> 行動熱點", 選擇開啟並編輯"網路名稱與網路密碼"後, 讓至多 8 台手機透過熱點連線上網. \n 但是因為目前 Windows 10 並 未提供 IPv6 網路協定下的網路熱點功能 , 因此在純 IPv6 網路協定下無法使用"行動熱點"服務. \n \n 利用手機鏡頭當作 webcam: \n Android: \xa0 https://www.digitalcitizen.life/turn-android-smartphone-webcam-windows \xa0 iPhone: \xa0 https://www.makeuseof.com/tag/use-your-iphone-as-a-webcam-heres-how-ios/ \xa0 \n \n 需要 clone 個人倉儲時: \n git clone --recurse-submodules 倉儲_url.git \n 例如:\xa0git clone --recurse-submodules \xa0 https://github.com/mdecourse/wcmj2020.git \n 現場直播的 audio 錄音設定 \n 在電腦輔助設計室進行直播時, 由於現場有擴音設備, 因此採用 OBS 串流至 Youtube 的最佳收音並非從 Webcam 的麥克風, 而是從擴音器以 audio outpu 連接到電腦的麥克風插槽, 然後將 OBS 的 audio 設定為從電腦的麥克風收音. \n \n \n', 'tags': '', 'url': 'Week 6.html'}, {'title': 'Week 7', 'text': '下載可攜程式系統 \n \n 利用 git 指令建立 cmsimde 網站 \n \n', 'tags': '', 'url': 'Week 7.html'}, {'title': 'Week 8', 'text': '請重新下載 \xa0 wcmj2020_tool.7z , 檔案大小為 435 MB, 解開壓縮後為 1.8 GB (其中包括 Mypaint, Dia 與 OBS 等). \n 學會利用 ShareX 與 OBS 拍攝螢幕操作影片, 並將個人維護倉儲與網站的過程影片放入個人網站中. \n', 'tags': '', 'url': 'Week 8.html'}, {'title': 'Week 9', 'text': '介紹電腦軟硬體及網路架構與設定的簡介 \n', 'tags': '', 'url': 'Week 9.html'}, {'title': '電腦軟硬體簡介', 'text': '硬體；可觸摸到的，例如:鍵盤、滑鼠 \n 主機:包含主機板、記憶體、顯示卡、插孔等等 \n 軟體；不可觸摸到的，例如:office系統 \n 作業系統；Windows(記事本、接龍、踩地雷) \n 應用軟體、商用軟體、共享軟體(免費，但有限時或功能限制)、綠色軟體(免費免安裝的軟體) \n', 'tags': '', 'url': '電腦軟硬體簡介.html'}, {'title': '網路架構與設定的簡介', 'text': '網際網路:每台電腦都有IP位置(編號)。 \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0實體建置:集線器或網路交換器。 \n 網路設定:由設定>乙太網路或WIFI>網路和共用中心>內容>調整IPv4之IP及DNS \n 設定Proxy(視情況所需) \n', 'tags': '', 'url': '網路架構與設定的簡介.html'}, {'title': 'Week 10', 'text': '利用PuTTY笧出密碼，以SSH維護倉儲 \n', 'tags': '', 'url': 'Week 10.html'}, {'title': '以SSH維護倉儲', 'text': '1.下載PuTTY: https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html \n 2. 利用 y:\\portablegit\\bin\\sh.exe 進入 shell 命令環境後, 以\xa0 \n \n \n \n \n \n \n 1 \n \n \n \n ssh-keygen -t rsa -b 4096 -C  "使用者學號" \n \n \n \n \n \n \n \n 在 /y/home/.ssh 目錄下建立 id_rsa 與 id_rsa.pub 等 private key 與 public key \n 之後以 SciTE 開啟 id_rsa.pub 後, 將此 public key 的內容, 以新增添加到 Github.com 帳號下 personal settings -> SSH and GPG keys 頁面下. \n 3. 接下來要利用 puttygen.exe 將 id_rsa 轉為 Putty 可以解讀的 .ppk 格式, 並修改隨身系統的啟動批次檔案, 指定利用 putty 目錄下的 plink 執行 git 指令的網路代理設定. \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n \n \n \n 修改啟動的 start.bat 加入下列設定: \n \xa0 \n set GIT_HOME=%Disk%:\\portablegit\\bin\\ \n set GIT_SSH=%Disk%:\\putty\\plink.exe \n \n \n \n \n \n \n \n 4. 利用 puttygen.exe 載入第二步驟所建立的 private key, 也就是 id_rsa. \n 開啟 puttygen 之後, 以右下方的 load 載入 id_rsa, 成功載入後, 利用 save private key 按鈕, 將已經轉為 putty 格式的 .ppk 存檔. 此一 .ppk 檔案必須在設定 putty 中 github.com session 時, 在 Connection->SSH->Auth 項目下, 將轉檔後的 .ppk 指向 private key file for authentication 欄位.\xa0 \n 並在 Connection->Proxy 項目下, 指定 Proxy type: HTTP, 並將 IPv6 代理主機設為 ::53 或 ::42 埠號設為 3128. \n 5. 之後確定 home 下的 .ssh 目錄中的 config 設定檔案為: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n \n \n \n # no proxy at home \n #ProxyCommand y:/PortableGit/mingw64/bin/connect.exe -H proxy.mde.nfu.edu.tw:3128 %h %p \n # set git_ssh=y:/putty/plink.exe with auth under putty github.com session setup \n ProxyCommand y:/putty/plink.exe github.com %h %p \n \xa0 \xa0 \n Host github.com \n \xa0\xa0\xa0\xa0 User git \n \xa0\xa0\xa0\xa0 Port 22 \n \xa0\xa0\xa0\xa0 Hostname github.com \n \xa0\xa0\xa0\xa0 \xa0 \n \xa0\xa0\xa0\xa0 # for connect.exe need openssh key format \n \xa0\xa0\xa0\xa0 #IdentityFile "y:\\home\\.ssh\\id_rsa_mdecourse" \n \xa0\xa0\xa0\xa0 # for plink.exe need rsa key format but set under putty github.com session \n \xa0\xa0\xa0\xa0 # plink.exe do not need the following setting \n \xa0\xa0\xa0\xa0 #IdentityFile "y:\\home\\.ssh\\mdecourse_putty_private.ppk" \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 TCPKeepAlive yes \n \xa0\xa0\xa0\xa0 IdentitiesOnly yes \n \n \n \n \n \n \n \n 6. 最後再將 wcmj2020 倉儲中 .git 目錄下的 config 檔案中的連線協定, 由 https 改為採 ssh 連線: 範例如下: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n \n \n \n [core] \n \xa0\xa0\xa0\xa0 repositoryformatversion = 0 \n \xa0\xa0\xa0\xa0 filemode =  false \n \xa0\xa0\xa0\xa0 bare =  false \n \xa0\xa0\xa0\xa0 logallrefupdates =  true \n \xa0\xa0\xa0\xa0 symlinks =  false \n \xa0\xa0\xa0\xa0 ignorecase =  true \n [submodule] \n \xa0\xa0\xa0\xa0 active = . \n [remote  "origin" ] \n \xa0\xa0\xa0\xa0 #url = https://github.com/mdecourse/wcmj2020.git \n \xa0\xa0\xa0\xa0 url = git@github.com:mdecourse/wcmj2020.git \n \xa0\xa0\xa0\xa0 fetch = +refs/heads/*:refs/remotes/origin/* \n [branch  "master" ] \n \xa0\xa0\xa0\xa0 remote = origin \n \xa0\xa0\xa0\xa0 merge = refs/heads/master \n [submodule  "cmsimde" ] \n \xa0\xa0\xa0\xa0 url = https: //github.com/mdecourse/cmsimde.git \n \n \n \n \n \n \n \n 之後就可以透過近端的 .ppk private key 與 Github.com 上的 public key 對應, 無需輸入帳號密碼就可以進行 git push \n', 'tags': '', 'url': '以SSH維護倉儲.html'}, {'title': 'Week 11', 'text': '說明如還利用[Leo Editor]管理[CMSiMDE]網際網路內容管理系統中[Pelican]網誌。其中有共用、近端與遠端等三個設定檔案的修改，以及兩個用程式按鈕轉檔的使用。 \n \n', 'tags': '', 'url': 'Week 11.html'}, {'title': 'Leo Editor 基本用法', 'text': '首先在隨身程式系統的命令列中，以leo啟動[Leo Editor]，然後開啟[wcmj2020]倉儲config目錄中的pelican.leo檔案。 \n 由於 Leo Editor 是一個大綱管理系統, 淡黃色區域是大綱節點區, 淡紅色區是與各大綱對應的內文區, 而淡藍色則是 Log 輸出區 \n 新增節點的指令: ctrl + i, 表示要 insert 一個新的節點 \n 向右移動節點的方法: ctrl + r, 表示要將節點往 right (右) 移動 \n 向左移動節點的方法: ctrl + l, 表示要將節點往 left (左) 移動 \n 向上移動節點的方法: ctrl + u, 表示要將節點往 up (上) 移動 \n 向下移動節點的方法: ctrl + d, 表示要將節點往 down (下) 移動 \n', 'tags': '', 'url': 'Leo Editor 基本用法.html'}, {'title': '三個檔案設定的修改', 'text': "在共用檔案中，修改AUTHOR = '使用者名稱或學號'以及SITENAME = '自己想使用的名稱' \n 在遠端檔案中，修改SITEURL = 'https://學號.github.io/wcmj2020/blog' \n 近端檔案目前不用修改 \n", 'tags': '', 'url': '三個檔案設定的修改.html'}, {'title': 'Week 12~13', 'text': '', 'tags': '', 'url': 'Week 12~13.html'}, {'title': 'W12', 'text': 'Leo Editor 與 Pelican blog 使用說明影片 \n', 'tags': '', 'url': 'W12.html'}, {'title': 'W13', 'text': 'Pelican Blog 內容與 Google Blogger 同步 \n W13\xa0 利用 Leo Editor 按鈕處理同步說明影片 \n 教學影片-2 \n 教學影片-3 \n 利用 Windows 10 設定 -> 選擇預設網頁瀏覽器, 使用 Google Chrome 作為預設瀏覽器. \n 隨身程式系統必須安裝\xa0 google-api-python-client 與 oauth2client pip install google-api-python-client oauth2client OAuth 2.0 client IDs 程式類別可以選擇 Desktop app 使用者完成 client_secrets.json 設定後, 必須將檔案存在倉儲目錄外部 \n 將 client_secrets.json 轉為 credential_token.dat 的程式: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n \n \n \n @language   python \n # https://developers.google.com/blogger/docs/3.0/using \n # under Mac command + b to execute \n import   pickle \n import   os \n from   googleapiclient.discovery  import   build \n from   google_auth_oauthlib.flow  import   InstalledAppFlow \n \xa0 \n \xa0 \n SCOPES  =   [ \'https://www.googleapis.com/auth/blogger\' , ] \n \xa0 \n # we check if the file tBo store the credentials exists \n if   not   os.path.exists( \'./../../yen_gm_blogger_token.dat\' ): \n \xa0 \n \xa0\xa0\xa0\xa0 flow  =   InstalledAppFlow.from_client_secrets_file( \'./../../yen_gm_blogger_secrets.json\' , SCOPES) \n \xa0\xa0\xa0\xa0 credentials  =   flow.run_local_server() \n \xa0 \n \xa0\xa0\xa0\xa0 with  open ( \'./../../yen_gm_blogger_token.dat\' ,  \'wb\' ) as credentials_dat: \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 pickle.dump(credentials, credentials_dat) \n else : \n \xa0\xa0\xa0\xa0 with  open ( \'./../../yen_gm_blogger_token.dat\' ,  \'rb\' ) as credentials_dat: \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 credentials  =   pickle.load(credentials_dat) \n service  =   build( \'blogger\' ,  \'v3\' , credentials = credentials) \n g.es(service) \n \n \n \n \n \n \n \n add_to_blogger 按鈕內容: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n 25 \n 26 \n 27 \n 28 \n 29 \n 30 \n 31 \n 32 \n 33 \n 34 \n 35 \n 36 \n 37 \n 38 \n 39 \n 40 \n 41 \n 42 \n 43 \n 44 \n 45 \n 46 \n 47 \n 48 \n 49 \n 50 \n 51 \n 52 \n 53 \n 54 \n 55 \n 56 \n 57 \n 58 \n 59 \n 60 \n 61 \n 62 \n 63 \n 64 \n 65 \n 66 \n 67 \n 68 \n 69 \n 70 \n 71 \n 72 \n 73 \n 74 \n 75 \n 76 \n 77 \n 78 \n 79 \n 80 \n 81 \n 82 \n 83 \n 84 \n 85 \n 86 \n 87 \n 88 \n 89 \n 90 \n 91 \n 92 \n 93 \n 94 \n 95 \n 96 \n 97 \n \n \n \n @language   python \n from   markdown  import   markdown \n from   oauth2client  import   client \n #from googleapiclient import sample_tools \n import   os \n # 配合使用 credential token \n import   pickle \n from   googleapiclient.discovery  import   build \n #from google_auth_oauthlib.flow import InstalledAppFlow \n #from google.auth.transport.requests import Request \n \xa0 \n os.environ[ \'TZ\' ]  =   \'Asia/Taipei\' \n with  open ( \'./../../blogger_credentials.dat\' ,  \'rb\' ) as credentials_dat: \n \xa0\xa0\xa0\xa0 credentials  =   pickle.load(credentials_dat) \n service  =   build( \'blogger\' ,  \'v3\' , credentials = credentials) \n \xa0 \n def   get_cat_tag_content(data): \n \xa0\xa0\xa0\xa0 # 請注意, 因為 data 來自 .md 的檔案 內容, 第1行為 --- \n \xa0\xa0\xa0\xa0 # 用跳行符號分割 \n \xa0\xa0\xa0\xa0 data_list  =   data.split( "\\n" ) \n \xa0\xa0\xa0\xa0 #第 2 行為 title \n \xa0\xa0\xa0\xa0 title =   data_list[ 1 ] \n \xa0\xa0\xa0\xa0 #第 4 行為 category \n \xa0\xa0\xa0\xa0 category  =   data_list[ 3 ] \n \xa0\xa0\xa0\xa0 #第 5 行為 tags \n \xa0\xa0\xa0\xa0 tags  =   data_list[ 4 ] \n \xa0\xa0\xa0\xa0 # 有多項資料的 content 型別為數列 \n \xa0\xa0\xa0\xa0 # 再將第 9 行之後的資料數列串回成以跳行隔開的資料 \n \xa0\xa0\xa0\xa0 content  =   "\\n" .join(data_list[ 8 :]) \n \xa0\xa0\xa0\xa0 # 先將截斷摘要與內文的 pelican md 檔按符號, 換成 Blogger 的 <!--more--> \n \xa0\xa0\xa0\xa0 content  =   content.replace( \'<!-- PELICAN_END_SUMMARY -->\' ,  \'<!--more-->\' ) \n \xa0\xa0\xa0\xa0 # 接著若內容有 ~~~python 與 ~~~ 則換成 Wordpress 格式 \n \xa0\xa0\xa0\xa0 #content = content.replace(\'~~~python\', \'[code lang="python"]\') \n \xa0\xa0\xa0\xa0 #content = content.replace(\'~~~\', \'[/code]\') \n \xa0\xa0\xa0\xa0 return   title, category, tags, content \n \xa0 \n # 從目前所在節點的 body pan 中取出類別, tags 以及文章內容 \n # p.h 為 @clean filename.md \n # 因為要使用 @clean 節點掛上為後的 blogger post_id, 因此改為讀 .md 檔案 \n md_filename  =   p.h.split( " " )[ 1 ] \n with  open (md_filename,  \'r\' , encoding = "utf-8" ) as content_file: \n \xa0\xa0\xa0\xa0 md_content  =   content_file.read() \n # title_str, category_str, tags_str, content = get_cat_tag_content(p.b) \n title_str, category_str, tags_str, content  =   get_cat_tag_content(md_content) \n category  =   category_str.split( ":" )[ 1 ] \n tags  =   tags_str.split( ":" )[ 1 ].split( "," ) \n tags.append(category) \n # title 是一個單獨的字串 \n title  =   title_str.split( ":" )[ 1 ] \n # 將 markdown 格式 content 轉為 html \n content  =   markdown(content) \n # 以下處理 content 的 <h2> 標題 \n content  =   content.replace( "<h2>" ,  "<h2><font size=\'4\'>" ) \n content  =   content.replace( "</h2>" ,  "</font></h2>" ) \n # g.es(content) \n \xa0 \n try : \n \xa0\xa0\xa0\xa0 \'\'\' \n \xa0\xa0\xa0\xa0 users = service.users() \n \xa0\xa0\xa0\xa0 # 取得使用者 profile 資料 \n \xa0\xa0\xa0\xa0 user = users.get(userId=\'self\').execute() \n \xa0\xa0\xa0\xa0 print(\'網誌名稱: %s\' % user[\'displayName\']) \n \xa0\xa0\xa0\xa0 \'\'\' \n \xa0\xa0\xa0\xa0 blogs  =   service.blogs() \n \xa0\xa0\xa0\xa0 # 取得使用者所建立網誌名稱 \n \xa0\xa0\xa0\xa0 blogs  =   blogs.listByUser(userId = \'self\' ).execute() \n \xa0\xa0\xa0\xa0 # post_id is now blogs["items"][0]["id"] \n \xa0\xa0\xa0\xa0 blog_id  =   blogs[ "items" ][ 0 ][ "id" ] \n \xa0\xa0\xa0\xa0 #for blog in blogs[\'items\']: \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 #print(blog[\'name\'], blog[\'url\']) \n \xa0\xa0\xa0\xa0 posts  =   service.posts() \n \xa0\xa0\xa0\xa0 # 新增網誌 post 時, 需要 post_id \n \xa0\xa0\xa0\xa0 body  =   { \n \xa0\xa0\xa0\xa0 "kind" :  "blogger#post" , \n \xa0\xa0\xa0\xa0 "id" : blog_id, \n \xa0\xa0\xa0\xa0 "title" : title, \n \xa0\xa0\xa0\xa0 # 利用 markdown 函式, 將 .md 的內文轉為 html, 作為 Blogger 的文章內容 \n \xa0\xa0\xa0\xa0 "content" : content, \n \xa0\xa0\xa0\xa0 "labels" : tags \n \xa0\xa0\xa0\xa0 } \n \xa0\xa0\xa0\xa0 insert  =   posts.insert(blogId = blog_id, body = body) \n \xa0\xa0\xa0\xa0 posts_doc  =   insert.execute() \n \xa0\xa0\xa0\xa0 post_id  =   posts_doc[ "id" ] \n \xa0\xa0\xa0\xa0 #print(posts_doc) \n \xa0\xa0\xa0\xa0 # 改用 credential token 後不會產生 blogger.dat \n \xa0\xa0\xa0\xa0 #os.remove("blogger.dat") \n \xa0\xa0\xa0\xa0 # 利用最後的 child 節點來儲存 post_id \n \xa0\xa0\xa0\xa0 to_save_post_id  =   p.insertAsLastChild()\xa0\xa0  \n \xa0\xa0\xa0\xa0 # 改為內文為空的節點, id 直接標在 head 標題  \n \xa0\xa0\xa0\xa0 to_save_post_id.b  =   "" \n \xa0\xa0\xa0\xa0 to_save_post_id.h  =   post_id \n \xa0\xa0\xa0\xa0 # 因為新增節點, commander 必須 redraw \n \xa0\xa0\xa0\xa0 c.redraw() \n \xa0\xa0\xa0\xa0 g.es( "post_id 為" , post_id) \n \xa0\xa0\xa0\xa0 g.es( "已經將資料送往 Blogger!" ) \n except (client.AccessTokenRefreshError): \n \xa0\xa0\xa0\xa0 g.es( "error" ) \n \n \n \n \n \n \n \n edit_to_blogger 按鈕內容: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n 25 \n 26 \n 27 \n 28 \n 29 \n 30 \n 31 \n 32 \n 33 \n 34 \n 35 \n 36 \n 37 \n 38 \n 39 \n 40 \n 41 \n 42 \n 43 \n 44 \n 45 \n 46 \n 47 \n 48 \n 49 \n 50 \n 51 \n 52 \n 53 \n 54 \n 55 \n 56 \n 57 \n 58 \n 59 \n 60 \n 61 \n 62 \n 63 \n 64 \n 65 \n 66 \n 67 \n 68 \n 69 \n 70 \n 71 \n 72 \n 73 \n 74 \n 75 \n 76 \n 77 \n 78 \n 79 \n 80 \n 81 \n \n \n \n @language   python \n from   markdown  import   markdown \n from   oauth2client  import   client \n #from googleapiclient import sample_tools \n import   os \n # 配合使用 credential token \n import   pickle \n from   googleapiclient.discovery  import   build \n #from google_auth_oauthlib.flow import InstalledAppFlow \n #from google.auth.transport.requests import Request \n \xa0 \n os.environ[ \'TZ\' ]  =   \'Asia/Taipei\' \n with  open ( \'./../../blogger_credentials.dat\' ,  \'rb\' ) as credentials_dat: \n \xa0\xa0\xa0\xa0 credentials  =   pickle.load(credentials_dat) \n service  =   build( \'blogger\' ,  \'v3\' , credentials = credentials) \n \xa0 \n def   get_cat_tag_content(data): \n \xa0\xa0\xa0\xa0 # 請注意, 因為 data 來自 .md 的檔案 內容, 第1行為 --- \n \xa0\xa0\xa0\xa0 # 用跳行符號分割 \n \xa0\xa0\xa0\xa0 data_list  =   data.split( "\\n" ) \n \xa0\xa0\xa0\xa0 #第 2 行為 title \n \xa0\xa0\xa0\xa0 title =   data_list[ 1 ] \n \xa0\xa0\xa0\xa0 #第 4 行為 category \n \xa0\xa0\xa0\xa0 category  =   data_list[ 3 ] \n \xa0\xa0\xa0\xa0 #第 5 行為 tags \n \xa0\xa0\xa0\xa0 tags  =   data_list[ 4 ] \n \xa0\xa0\xa0\xa0 # 有多項資料的 content 型別為數列 \n \xa0\xa0\xa0\xa0 # 再將第 9 行之後的資料數列串回成以跳行隔開的資料 \n \xa0\xa0\xa0\xa0 content  =   "\\n" .join(data_list[ 8 :]) \n \xa0\xa0\xa0\xa0 # 先將截斷摘要與內文的 pelican md 檔按符號, 換成 Blogger 的 <!--more--> \n \xa0\xa0\xa0\xa0 content  =   content.replace( \'<!-- PELICAN_END_SUMMARY -->\' ,  \'<!--more-->\' ) \n \xa0\xa0\xa0\xa0 # 接著若內容有 ~~~python 與 ~~~ 則換成 Wordpress 格式 \n \xa0\xa0\xa0\xa0 #content = content.replace(\'~~~python\', \'[code lang="python"]\') \n \xa0\xa0\xa0\xa0 #content = content.replace(\'~~~\', \'[/code]\') \n \xa0\xa0\xa0\xa0 return   title, category, tags, content \n \xa0 \n # 從目前所在節點的 body pan 中取出類別, tags 以及文章內容 \n # p.h 為 @clean filename.md \n # 因為要使用 @clean 節點掛上為後的 blogger post_id, 因此改為讀 .md 檔案 \n md_filename  =   p.h.split( " " )[ 1 ] \n with  open (md_filename,  \'r\' , encoding = "utf-8" ) as content_file: \n \xa0\xa0\xa0\xa0 md_content  =   content_file.read() \n # title_str, category_str, tags_str, content = get_cat_tag_content(p.b) \n title_str, category_str, tags_str, content  =   get_cat_tag_content(md_content) \n category  =   category_str.split( ":" )[ 1 ] \n tags  =   tags_str.split( ":" )[ 1 ].split( "," ) \n tags.append(category) \n # title 是一個單獨的字串 \n title  =   title_str.split( ":" )[ 1 ] \n # 將 markdown 格式 content 轉為 html \n content  =   markdown(content) \n # 以下處理 content 的 <h2> 標題 \n content  =   content.replace( "<h2>" ,  "<h2><font size=\'4\'>" ) \n content  =   content.replace( "</h2>" ,  "</font></h2>" ) \n # g.es(content) \n \xa0 \n try : \n \xa0\xa0\xa0\xa0 blogs  =   service.blogs() \n \xa0\xa0\xa0\xa0 # 取得使用者所建立網誌名稱 \n \xa0\xa0\xa0\xa0 blogs  =   blogs.listByUser(userId = \'self\' ).execute() \n \xa0\xa0\xa0\xa0 blog_id  =   blogs[ "items" ][ 0 ][ "id" ] \n \xa0\xa0\xa0\xa0 # 設法取得原 post 的 id \n \xa0\xa0\xa0\xa0 postid_outline  =   p.getLastChild() \n \xa0\xa0\xa0\xa0 # 直接從標題取得 post 的 id 號碼 \n \xa0\xa0\xa0\xa0 post_id  =   postid_outline.h \n \xa0\xa0\xa0\xa0 posts  =   service.posts() \n \xa0\xa0\xa0\xa0 # 更新網誌文章時的 body \n \xa0\xa0\xa0\xa0 body  =   { \n \xa0\xa0\xa0\xa0 "kind" :  "blogger#post" , \n \xa0\xa0\xa0\xa0 "title" : title, \n \xa0\xa0\xa0\xa0 "content" : content \n \xa0\xa0\xa0\xa0 } \n \xa0\xa0\xa0\xa0 # need to save postId to outline head \n \xa0\xa0\xa0\xa0 update  =   posts.update(blogId = blog_id, postId = post_id, body = body, publish = True ) \n \xa0\xa0\xa0\xa0 update_doc  =   update.execute() \n \xa0\xa0\xa0\xa0 # 使用 credential token 後, 無需刪除 blogger.dat \n \xa0\xa0\xa0\xa0 #os.remove("blogger.dat") \n \xa0\xa0\xa0\xa0 g.es( "post_id 為" , post_id) \n \xa0\xa0\xa0\xa0 g.es( "已經將更新資料送往 Blogger!" ) \n except (client.AccessTokenRefreshError): \n \xa0\xa0\xa0\xa0 g.es( "error" ) \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'W13.html'}, {'title': 'Week 14', 'text': '從 \xa0 https://2019wcm.blogspot.com/2019/03/posted-via-python.html \xa0取得Google Blogger Python API 程式, 修改後執行, 測試是否可以讀取設定的 client_secrets.json, 在各自的 Blogger ID 與 Post ID 中新增或修改網誌文章. \n 以 Blogger Python API 程式修改文章的教學影片 \xa0 (for @gm users only) \n \n 直接在操作系統建立網際內容管理合用系統 \n Windows 10 64 位元操作系統 \n 安裝 Python 3.8.3 與 pip \n 至\xa0 https://www.python.org/downloads/windows/ \xa0下載 Python 3.8.3 \xa0 Windows x86-64 executable installer \n 可以直接選擇安裝 pip 與所有選項內容 \n 安裝 Git \n 利用\xa0 64-bit Git for Windows Setup \xa0安裝 Git 工具. \n 安裝 CMSiMDE 所需模組 \n 利用 cmd 開啟命令列視窗, 以 pip 安裝 flask flask_cors lxml bs4 markdown pelican leo 等模組 \n pip install\xa0 \xa0flask flask_cors lxml bs4 markdown pelican leo \n Ubuntu 20.04 操作系統 (請下載 \xa0 W12 Virtualbox 虛擬主機檔案 ) \n Ubuntu 20.04 同時存在 Python 2.7 與 Python 3.8.2,\xa0 CMSiMDE 只相容於 Python 3.8.2, 因此啟動指令必須使用: \n python3 wsgi.py \n 與\xa0 \n pip3 install\xa0 \xa0flask flask_cors lxml bs4 markdown pelican leo \n Mac OS X 操作系統 \n 與 Ubuntu 20.04 類似. \n', 'tags': '', 'url': 'Week 14.html'}, {'title': '新增 blogger 文章', 'text': 'w14_blogger_add_1.py \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n 25 \n 26 \n 27 \n 28 \n 29 \n 30 \n 31 \n 32 \n 33 \n 34 \n 35 \n 36 \n 37 \n 38 \n 39 \n 40 \n 41 \n 42 \n 43 \n 44 \n 45 \n 46 \n 47 \n 48 \n 49 \n 50 \n 51 \n 52 \n 53 \n 54 \n 55 \n \n \n \n \'\'\' \n 用來測試 Google Blogger Python API 新增文章程式 \n \xa0 \n pip install google-api-python-client oauth2client \n \xa0 \n \'\'\' \n \xa0 \n import   sys \n from   oauth2client  import   client \n from   googleapiclient  import   sample_tools \n \xa0 \n argv  =   "" \n # 認證並建立服務 \n service, flags  =   sample_tools.init( \n \xa0\xa0 argv,  \'blogger\' ,  \'v3\' , __doc__,  \'./client_secrets.json\' , \n \xa0\xa0 scope = \'https://www.googleapis.com/auth/blogger\' ) \n \xa0 \n try : \n \xa0\xa0\xa0\xa0 users  =   service.users() \n \xa0\xa0\xa0\xa0 # 取得使用者 profile 資料 \n \xa0\xa0\xa0\xa0 user  =   users.get(userId = \'self\' ).execute() \n \xa0\xa0\xa0\xa0 print ( \'網誌名稱: %s\'   %   user[ \'displayName\' ]) \n \xa0\xa0\xa0\xa0 blogs  =   service.blogs() \n \xa0\xa0\xa0\xa0 # 取得使用者所建立網誌名稱 \n \xa0\xa0\xa0\xa0 blogs  =   blogs.listByUser(userId = \'self\' ).execute() \n \xa0\xa0\xa0\xa0 for   blog  in   blogs[ \'items\' ]: \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 print (blog[ \'name\' ], blog[ \'url\' ]) \n \xa0\xa0\xa0\xa0 posts  =   service.posts() \n \xa0\xa0\xa0\xa0 # 新增網誌 post 時, 需要 blog id \n \xa0 \n \xa0\xa0\xa0\xa0 body  =   { \n \xa0\xa0\xa0\xa0 "kind" :  "blogger#post" , \n \xa0\xa0\xa0\xa0 "id" :  "123" , \n \xa0\xa0\xa0\xa0 "title" :  "透過 Python 程式新增網誌文章1" , \n \xa0\xa0\xa0\xa0 "content" : "使用 Google Blogger API 可以利用程式新增網誌文章內容1" \n \xa0\xa0\xa0\xa0 } \n \xa0\xa0\xa0\xa0 \xa0 \n \xa0\xa0\xa0\xa0 insert  =   posts.insert(blogId = \'123\' , body = body) \n \xa0\xa0\xa0\xa0 posts_doc  =   insert.execute() \n \xa0\xa0\xa0\xa0 print (posts_doc) \n \xa0\xa0\xa0\xa0 \xa0 \n \xa0\xa0\xa0\xa0 \'\'\' \n \xa0\xa0\xa0\xa0 # 更新網誌文章時的 body \n \xa0\xa0\xa0\xa0 body = { \n \xa0\xa0\xa0\xa0 "kind": "blogger#post", \n \xa0\xa0\xa0\xa0 "title": "透過 Python 程式修改網誌文章2", \n \xa0\xa0\xa0\xa0 "content": "使用 Google Blogger API 可以利用程式修改網誌文章內容. http://mde.tw/cd2019" \n \xa0\xa0\xa0\xa0 } \n \xa0\xa0\xa0\xa0 \xa0 \n \xa0\xa0\xa0\xa0 update = posts.update(blogId="123", postId="456", body=body, publish=True) \n \xa0\xa0\xa0\xa0 update_doc = update.execute() \n \xa0\xa0\xa0\xa0 print(update_doc) \n \xa0\xa0\xa0\xa0 \'\'\' \n except (client.AccessTokenRefreshError): \n \xa0\xa0\xa0\xa0 print ( "error" ) \n \n \n \n \n \n \n \n', 'tags': '', 'url': '新增 blogger 文章.html'}, {'title': '編輯 Blogger 文章', 'text': 'w14_blogger_edit_1.py \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n 25 \n 26 \n 27 \n 28 \n 29 \n 30 \n 31 \n 32 \n 33 \n 34 \n 35 \n 36 \n 37 \n 38 \n 39 \n 40 \n 41 \n 42 \n 43 \n 44 \n 45 \n 46 \n 47 \n 48 \n 49 \n 50 \n 51 \n 52 \n 53 \n 54 \n 55 \n 56 \n \n \n \n \'\'\' \n 用來測試 Google Blogger Python API 編輯文章程式 \n \xa0 \n pip install google-api-python-client oauth2client \n \xa0 \n \'\'\' \n \xa0 \n import   sys \n from   oauth2client  import   client \n from   googleapiclient  import   sample_tools \n \xa0 \n argv  =   "" \n # 認證並建立服務 \n service, flags  =   sample_tools.init( \n \xa0\xa0 argv,  \'blogger\' ,  \'v3\' , __doc__,  \'./client_secrets.json\' , \n \xa0\xa0 scope = \'https://www.googleapis.com/auth/blogger\' ) \n \xa0 \n try : \n \xa0\xa0\xa0\xa0 users  =   service.users() \n \xa0\xa0\xa0\xa0 # 取得使用者 profile 資料 \n \xa0\xa0\xa0\xa0 user  =   users.get(userId = \'self\' ).execute() \n \xa0\xa0\xa0\xa0 print ( \'網誌名稱: %s\'   %   user[ \'displayName\' ]) \n \xa0\xa0\xa0\xa0 blogs  =   service.blogs() \n \xa0\xa0\xa0\xa0 # 取得使用者所建立網誌名稱 \n \xa0\xa0\xa0\xa0 blogs  =   blogs.listByUser(userId = \'self\' ).execute() \n \xa0\xa0\xa0\xa0 for   blog  in   blogs[ \'items\' ]: \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 print (blog[ \'name\' ], blog[ \'url\' ]) \n \xa0\xa0\xa0\xa0 posts  =   service.posts() \n \xa0\xa0\xa0\xa0 # 新增網誌 post 時, 需要 blog id \n \xa0 \n \xa0\xa0\xa0\xa0 \'\'\' \n \xa0\xa0\xa0\xa0 body = { \n \xa0\xa0\xa0\xa0 "kind": "blogger#post", \n \xa0\xa0\xa0\xa0 "id": "123", \n \xa0\xa0\xa0\xa0 "title": "透過 Python 程式新增網誌文章1", \n \xa0\xa0\xa0\xa0 "content":"使用 Google Blogger API 可以利用程式新增網誌文章內容1" \n \xa0\xa0\xa0\xa0 } \n \xa0\xa0\xa0\xa0 \xa0 \n \xa0\xa0\xa0\xa0 insert = posts.insert(blogId=\'123\', body=body) \n \xa0\xa0\xa0\xa0 posts_doc = insert.execute() \n \xa0\xa0\xa0\xa0 print(posts_doc) \n \xa0\xa0\xa0\xa0 \'\'\' \n \xa0 \n \xa0\xa0\xa0\xa0 # 更新網誌文章時的 body \n \xa0\xa0\xa0\xa0 body  =   { \n \xa0\xa0\xa0\xa0 "kind" :  "blogger#post" , \n \xa0\xa0\xa0\xa0 "title" :  "透過 Python 程式修改網誌文章2" , \n \xa0\xa0\xa0\xa0 "content" :  "使用 Google Blogger API 可以利用程式修改網誌文章內容. http://mde.tw/cd2019" \n \xa0\xa0\xa0\xa0 } \n \xa0\xa0\xa0\xa0 \xa0 \n \xa0\xa0\xa0\xa0 update  =   posts.update(blogId = "123" , postId = "456" , body = body, publish = True ) \n \xa0\xa0\xa0\xa0 update_doc  =   update.execute() \n \xa0\xa0\xa0\xa0 print (update_doc) \n \xa0 \n except (client.AccessTokenRefreshError): \n \xa0\xa0\xa0\xa0 print ( "error" ) \n \n \n \n \n \n \n \n', 'tags': '', 'url': '編輯 Blogger 文章.html'}, {'title': 'Week 15~18', 'text': '各分組除了必須將 W1-W14 週的所有上課內容, 以圖文及影音資料加以整理在個人及分組倉儲、網站及簡報外. \n 可以自選另一主題, 將分組協同的過程與內容整理在個人與分組的倉儲資料中. \n', 'tags': '', 'url': 'Week 15~18.html'}, {'title': '未來規劃', 'text': '二技招生 \n 二技日間部申請入學 \n 大學轉學考 \n 大學辦理轉學招生審核作業要點 \n 進入職場 \n 教育部補助大專校院辦理五年制專科學校畢業生投入職場要點 \n 畢業三年後報考碩士班 \n 大學同等學力第五條規定 \n 出國留學 \n', 'tags': '', 'url': '未來規劃.html'}, {'title': '資料來源', 'text': 'Web si (網站te):\xa0 https://mde.tw/wcmj2020 \xa0 \n 指導老師:嚴家銘 \n', 'tags': '', 'url': '資料來源.html'}, {'title': '我的興趣', 'text': '我的興趣是研究槍械以及各式武器，我想帶給更多人認識這些事物。 \n', 'tags': '', 'url': '我的興趣.html'}, {'title': '手槍(Handgun)', 'text': '手槍，又稱手銃、拳銃，是一種短小且便於攜帶的個人防衛武器，射程大約50公尺，通常使用9毫米手槍彈，包括Glock P226 ock P226 等手槍都有使用，也有一些大口徑子彈，例如.50手槍彈，使用的有沙漠之鷹及一些左輪手槍。手槍通常是用來給執法單位或是國安人員使用。在部隊中，通常只有軍官或士官配有手槍，或是在特殊單位，例如：特勤單位、特戰單位等作為復武器使用。常見的手槍重量大約在500~700公克，然而，有些大口徑的手槍卻可以到1200公克。 \n \n \n 台灣自行研發的手槍為T75/T75K1/K2/K3，此四型是國防部參照貝瑞塔M9手槍所研發。全槍重約0.95公斤，使用9毫米手槍彈，目前發配於中華民國國軍、中華民國特種警察、法務部矯正署、中華民國法務部、法務部調查局、海洋委員會海巡署、金融機構駐衛警。 \n \n', 'tags': '', 'url': '手槍(Handgun).html'}, {'title': '突擊步槍(Assault Rifle)', 'text': '突擊步槍作為現代各國軍隊的只要武器，發展出許多不同的擊發方式。最早的突擊步槍為二戰時期德意志軍隊所使用的MP44，使用7.62毫米步槍彈，可謂是當時最先進的武器之一，後來各國開始研發自己的突擊步槍。美國自二戰時期配備的是M1\xa0 Garand，此槍為八發半自動步槍使用7.62毫米步槍彈，後來被M14取代，而現代則是使用AR-15系列的突擊步槍，著名的M16或是M4也都是此系列的步槍。 \n \n \n 台灣研發的步槍為T65K1/K2/K3、T86及T91，而我們也是參照AR-15的擊發方式所研發，使用5.56步槍彈。 \n \n', 'tags': '', 'url': '突擊步槍(Assault Rifle).html'}]};
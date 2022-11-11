function ManageIndexHtml () {

    this.mainSetup = () =>{
        this.manageLogout();
        this.manageHelp();
        this.renderLinks([
            {
                "value": "dashboard",
                "text": "Dashboard",
                "icon": "gauge"
            },{
                "value": "account",
                "text": "E-Wallet",
                "icon": "file-invoice"
            },{
                "value": "auctioninglots",
                "text": "Auction Lots",
                "icon": "table-list"
            },
            {
                "value": "upcomingauction",
                "text": "Upcoming Auction",
                "icon": "forward"
            },
            {
                "value": "postauctionstatus",
                "text": "Post Auction",
                "icon": "file-import"
            },
            {
                "value": "payment",
                "text": "Payment",
                "icon": "money-bill"
            },
            {
                "value": "orders",
                "text": "Orders",
                "icon": "arrow-down-short-wide"
            },
            {
                "value": "history",
                "text": "History",
                "icon": "clock-rotate-left"
            },
            {
                "value": "servicecharge",
                "text": "Service Charge",
                "icon": "cash-register"
            },
            {
                "value": "feedback",
                "text": "Feedback",
                "icon": "comment-medical"
            },
            {
                "value": "profile",
                "text": "Profile",
                "icon": "user"
            }
        ]);
        this.manageDefaulterStatus();
        this.pageLoad('payment');
    } 

    this.manageLogout  = () =>{
        this.logOutBtn = document.querySelector('.logout-btn');
        this.logOutBtn.addEventListener('click',()=>{
            localStorage.clear();
            window.location.reload()
        });
    }

    this.manageHelp = () =>{
        this.helpBtn = document.querySelector('.help-btn');
        this.helpModal   = new Modal({
            selector:'#help',
            wrapperCss:"width:30%;border-radius:5px;margin-top:150px",
        });

        this.helpBtn.addEventListener('click',this.helpModal.showModal)
    }

    this.renderLinks = (linkData) =>{
        this.linkWrapper = document.querySelector('aside');
        if(linkData){
            linkData.forEach(data=>{
                var linkEls = new ElCreatore({
                    linkDiv:"div",
                    textWrapper:"div",
                    iconWrapper:"div"
                });

                linkEls.linkDiv.classList.add('link');
                linkEls.linkDiv.dataset.link = data.value;

                linkEls.linkDiv.addEventListener('click',this.pageLoad.bind('',data.value))

                linkEls.textWrapper.classList.add('text');
                linkEls.iconWrapper.classList.add('icon');


                linkEls.textWrapper.textContent = data.text;
                linkEls.iconWrapper.innerHTML = `<i class="fa-solid fa-${data.icon}"></i>`;

                ElAppend(linkEls.linkDiv,linkEls.textWrapper,linkEls.iconWrapper);
                ElAppend(this.linkWrapper,linkEls.linkDiv)
            })
        }

        
    }

    this.pageLoad = (pagename) => $("#main").load(`pages/${pagename}.html`);
    

    this.manageDefaulterStatus = () =>{
        this.listModal = new Modal({
            selector:"#view-list-popup",
            wrapperCss:"width:50%;backcolor:red;",
        })
        this.viewListBtn = document.querySelector('.view-list');

        this.viewListBtn.addEventListener('click',()=>this.listModal.showModal());
    }

    this.mainSetup();
}

var manageIndexHtml = new ManageIndexHtml();
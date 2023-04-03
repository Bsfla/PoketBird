"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[849],{1233:function(e,n,o){o.d(n,{eg:function(){return _},aO:function(){return f},_:function(){return M}});var i=o(8085),t=o(423),r=o(1664),a=o.n(r),s=o(1163),l=o(7294),c=o(2125),d=o(3055),p=c.ZP.header.withConfig({displayName:"style__Header",componentId:"sc-1ifjbeu-0"})(["position:sticky;background-color:",";width:33rem;margin-top:10px;top:0px;margin-bottom:15px;.user_nickname{font-weight:bold;margin-left:20px;.nickname{color:",";}}","{top:58px;height:100%;}","{width:80%;}","{width:100%;margin-top:0;top:30px;.user_nickname{margin-left:50px;margin-top:55px;}}"],d.Z.colors.main,d.Z.colors.sub3,d.Z.media.laptop,d.Z.media.tablet,d.Z.media.mobile2),m=c.ZP.nav.withConfig({displayName:"style__Navigation",componentId:"sc-1ifjbeu-1"})(["width:100%;display:flex;justify-content:space-around;align-items:center;margin-top:11px;font-weight:bold;"]),u=c.ZP.div.withConfig({displayName:"style__Menu",componentId:"sc-1ifjbeu-2"})(["width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:15px;cursor:pointer;span{margin-bottom:5px;color:",";}.location{display:",";width:70px;border:solid ",";}"],(function(e){return e.isLocated?"":d.Z.colors.gray1}),(function(e){return e.isLocated?"inline":"none"}),d.Z.colors.sub3),h=(c.ZP.div.withConfig({displayName:"style__UserList",componentId:"sc-1ifjbeu-3"})(["display:flex;justify-content:center;width:100%;align-items:center;"]),o(5893)),f=function(e){var n=e.children,o=(0,s.useRouter)(),r=o.query.id,c=(0,l.useMemo)((function(){return"follower"===o.pathname.slice(13)}),[o]);return(0,h.jsxs)(i.Z,{children:[(0,h.jsxs)(p,{children:[(0,h.jsxs)("span",{className:"user_nickname",children:[(0,h.jsx)("span",{className:"nickname",children:"#\ub79c\ud134\ub79c\ud134"}),"\ub2d8\uc758 \uce5c\uad6c"]}),(0,h.jsxs)(m,{children:[(0,h.jsx)(a(),{href:"".concat((0,t.iG)(Number(r))),children:(0,h.jsxs)(u,{isLocated:c,children:[(0,h.jsx)("span",{children:"\ud314\ub85c\uc6cc"}),(0,h.jsx)("div",{className:"location"})]})}),(0,h.jsx)(a(),{href:"".concat((0,t.WC)(Number(r))),children:(0,h.jsxs)(u,{isLocated:!c,children:[(0,h.jsx)("span",{children:"\ud314\ub85c\uc789"}),(0,h.jsx)("div",{className:"location"})]})})]})]}),n]})},g=c.ZP.button.withConfig({displayName:"style__Button",componentId:"sc-18waa9a-0"})(["width:10rem;height:30px;background-color:",";color:",";font-size:13px;margin-top:20px;margin-bottom:20px;border-radius:20px;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;svg{margin-right:8px;}"],(function(e){return e.isFollowing?d.Z.colors.gray3:d.Z.colors.sub3}),(function(e){return e.isFollowing?"black":d.Z.colors.white})),x=o(454),w=o(8767),b=o(6649),y=o(196),j=o(4981),Z=o(463),v=o(6016),_=function(e){var n=e.user,o=e.profile,i=(0,w.useQueryClient)(),t=(0,Z.VY)().showAlert,r=(0,w.useMutation)(b.P_,{onSuccess:function(){t(v.e.FOLLOWING_SUCCESS),i.invalidateQueries(j.a.profile)},onError:function(e){var n;e instanceof y.d7&&alert(null===(n=e.response)||void 0===n?void 0:n.data)}}).mutate,a=(0,w.useMutation)(b.uU,{onSuccess:function(){i.invalidateQueries(j.a.profile)},onError:function(e){var n;e instanceof y.d7&&alert(null===(n=e.response)||void 0===n?void 0:n.data)}}).mutate,s=o.Followers,c=(0,l.useMemo)((function(){return!!s.find((function(e){return e.id===(null===n||void 0===n?void 0:n.id)}))}),[s]);return(0,h.jsx)(h.Fragment,{children:c?(0,h.jsxs)(g,{isFollowing:c,onClick:function(){if(confirm("\ud314\ub85c\uc789\uc744 \ub04a\uc73c\uc2dc\uaca0\uc2b5\ub2c8\uae4c?"))return a(o.id)},children:[(0,h.jsx)(x.UDo,{size:15}),"Following"]}):(0,h.jsxs)(g,{isFollowing:c,onClick:function(){r(o.id)},children:[(0,h.jsx)(x.cHf,{size:15}),"Follow"]})})},C=o(5733),P=c.ZP.div.withConfig({displayName:"style__Wrrapper",componentId:"sc-19uo0dw-0"})(["width:7rem;height:10rem;background-color:",";border-radius:10px;display:flex;flex-direction:column;align-items:center;padding:10px;gap:5px;.nickname{font-size:12px;font-weight:bold;color:",";margin-top:5px;}","{width:7.5rem;}"],d.Z.colors.white,d.Z.colors.gray1,d.Z.media.mobile2),k=c.ZP.button.withConfig({displayName:"style__Button",componentId:"sc-19uo0dw-1"})(["width:4rem;height:20px;padding:3px;font-size:8px;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;background-color:",";color:",";"],d.Z.colors.sub,d.Z.colors.white),N=c.ZP.button.withConfig({displayName:"style__DeleteButton",componentId:"sc-19uo0dw-2"})(["width:4rem;height:20px;padding:3px;font-size:8px;margin-bottom:20px;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;background-color:",";color:",";"],d.Z.colors.gray1,d.Z.colors.white),I=function(e){var n=e.followUser,o=e.handleDeleteFollow;return(0,h.jsxs)(P,{children:[(0,h.jsx)(C.Z,{imgPath:n.ProfileImage}),(0,h.jsx)("span",{className:"nickname",children:n.nickname}),(0,h.jsx)(a(),{href:"".concat(t.Jt,"/").concat(n.id),children:(0,h.jsx)(k,{children:"\ud504\ub85c\ud544 \ubcf4\uae30"})}),(0,h.jsx)(N,{onClick:o(n.id),children:"\uc0ad\uc81c\ud558\uae30"})]})},z=o(2907),O=c.ZP.div.withConfig({displayName:"style__Wrrapper",componentId:"sc-1gx3eo6-0"})(["display:flex;flex-wrap:wrap;gap:20px;max-width:33rem;margin:0 auto;padding-left:13px;","{justify-content:center;margin-top:20px;}"],d.Z.media.mobile2),E=(c.ZP.div.withConfig({displayName:"style__NotUserList",componentId:"sc-1gx3eo6-1"})(["display:flex;flex-direction:column;justify-content:center;align-items:center;margin:0 auto;span{font-weight:bold;}"]),c.ZP.div.withConfig({displayName:"style__EndUserList",componentId:"sc-1gx3eo6-2"})(["width:100%;height:10px;"])),M=function(e){var n=e.followUsers,o=e.handleDeleteFollow,i=e.endUserList;return(0,h.jsxs)(O,{children:[n.map((function(e){return(0,h.jsx)(I,{followUser:e,handleDeleteFollow:o},e.id)})),n.length<1&&(0,h.jsx)(z.Z,{}),(0,h.jsx)(E,{ref:i})]})}},3374:function(e,n,o){o.d(n,{Z:function(){return g}});o(7294);var i=o(2125),t=o(3055),r=(0,i.F4)(["from{opacity:0;transform:translateY(5%);}to{opacity:1;transform:translateY(0);}"]),a=i.ZP.form.withConfig({displayName:"style__Wrapper",componentId:"sc-9e95dw-0"})(["display:flex;flex-direction:column;align-items:center;width:40rem;height:auto;background-color:",";border-radius:20px;animation:"," 0.5s;margin-bottom:50px;padding-bottom:25px;span{color:",";font-weight:bold;margin-bottom:25px;}","{width:80%;}","{width:428px;height:100vh;}.login{margin-top:20px;cursor:pointer;}"],t.Z.colors.white,r,t.Z.colors.sub,t.Z.media.laptop,t.Z.media.mobile2),s=i.ZP.span.withConfig({displayName:"style__Title",componentId:"sc-9e95dw-1"})(["font-family:",";font-size:32px;color:",";margin-bottom:30px;"],t.Z.font.title,t.Z.colors.sub),l=i.ZP.input.withConfig({displayName:"style__Input",componentId:"sc-9e95dw-2"})(["width:30rem;padding:15px;border:none;outline:none;border-bottom:solid ",";font-weight:bold;font-size:12px;margin-top:15px;","{width:60%;}"],t.Z.colors.main,t.Z.media.laptop),c=i.ZP.div.withConfig({displayName:"style__Error",componentId:"sc-9e95dw-3"})(["display:flex;justify-content:flex-start;width:30rem;span{margin-left:15px;margin-top:10px;font-size:13px;color:red;}","{width:60%;}"],t.Z.media.laptop),d=o(1829),p=o(39),m=o(423),u=o(1664),h=o.n(u),f=o(5893),g=function(){var e=(0,p.T4)(),n=e.nickname,o=e.email,i=e.password,t=e.passwordConfirm,r=e.handleChangeNickname,u=e.handleChangeEmail,g=e.handleChangePassword,x=e.handleChangePasswordConfirm,w=e.isDisabled,b=e.handleSignup;return(0,f.jsxs)(a,{onSubmit:b,children:[(0,f.jsx)(s,{children:"SignUp"}),(0,f.jsx)("span",{children:"\ud68c\uc6d0 \uc815\ubcf4\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694"}),(0,f.jsx)(l,{placeholder:"\ub2c9\ub124\uc784",name:"nickname",value:n.content,onChange:r}),n.errorMessage&&(0,f.jsx)(c,{children:(0,f.jsx)("span",{children:n.errorMessage})}),(0,f.jsx)(l,{placeholder:"\uc774\uba54\uc77c",name:"email",value:o.content,onChange:u}),o.errorMessage&&(0,f.jsx)(c,{children:(0,f.jsx)("span",{children:o.errorMessage})}),(0,f.jsx)(l,{placeholder:"\ube44\ubc00\ubc88\ud638",name:"password",type:"password",value:i.content,onChange:g}),i.errorMessage&&(0,f.jsx)(c,{children:(0,f.jsx)("span",{children:i.errorMessage})}),(0,f.jsx)(l,{placeholder:"\ube44\ubc00\ubc88\ud638 \ud655\uc778",name:"passwordconfirm",type:"password",value:t.content,onChange:x}),t.errorMessage&&(0,f.jsx)(c,{children:(0,f.jsx)("span",{children:t.errorMessage})}),(0,f.jsx)(d.Z,{name:"\uac00\uc785\ud558\uae30",disabled:!w}),(0,f.jsx)(h(),{href:m.DV,children:(0,f.jsx)("span",{className:"login",children:"\ub85c\uadf8\uc778"})})]})}},2907:function(e,n,o){o.d(n,{Z:function(){return m}});var i,t,r=o(7294);function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i])}return e},a.apply(this,arguments)}var s=function(e){return r.createElement("svg",a({height:48,width:48,xmlns:"http://www.w3.org/2000/svg"},e),i||(i=r.createElement("path",{d:"M0 0h48v48H0z",fill:"none"})),t||(t=r.createElement("path",{d:"M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.84 0-16-7.16-16-16 0-3.7 1.27-7.09 3.37-9.8L33.8 36.63C31.09 38.73 27.7 40 24 40zm12.63-6.2L14.2 11.37C16.91 9.27 20.3 8 24 8c8.84 0 16 7.16 16 16 0 3.7-1.27 7.09-3.37 9.8z"})))},l=o(2125),c=o(3055),d=l.ZP.div.withConfig({displayName:"style__Wrapper",componentId:"sc-umudl2-0"})(["display:flex;flex-direction:column;justify-content:center;align-items:center;margin:0 auto;margin-bottom:150px;span{font-weight:bold;margin-top:15px;}","{width:100%;}"],c.Z.media.mobile2),p=o(5893),m=function(){return(0,p.jsxs)(d,{children:[(0,p.jsx)(s,{}),(0,p.jsx)("span",{children:"\ubaa9\ub85d\uc774 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4"})]})}},3423:function(e,n,o){o.d(n,{Z:function(){return h}});var i=o(9499),t=(o(7294),o(2125).ZP.section.withConfig({displayName:"style__Wrapper",componentId:"sc-ewrfc2-0"})(["display:flex;flex-direction:column;align-items:center;width:100%;height:100%;gap:30px;"])),r=o(9949),a=o(463),s=o(4266),l=o(423),c=o(1664),d=o.n(c),p=o(5893);function m(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,i)}return o}function u(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?m(Object(o),!0).forEach((function(n){(0,i.Z)(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):m(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}var h=function(e){var n=e.posts,o=e.endPost,i=(0,a.dd)(s.P.POST_IMAGE);return(0,p.jsxs)(t,{children:[n.map((function(e){return(0,p.jsx)(d(),{href:l.DV,children:(0,p.jsx)(r.y4,{post:e})},e.id)})),(0,p.jsx)(r.P9,{endPost:o}),(0,p.jsx)(r.qu,u({},i))]})}},9949:function(e,n,o){o.d(n,{eg:function(){return M.eg},U0:function(){return H},y4:function(){return i.y4},P9:function(){return i.P9},qu:function(){return i.qu},nr:function(){return E},PP:function(){return g},_j:function(){return z},rU:function(){return D}});var i=o(7647),t=o(7294),r=o(5733),a=o(2125),s=o(3055),l=a.ZP.div.withConfig({displayName:"style__Wrapper",componentId:"sc-gbb2sl-0"})(["display:flex;flex-direction:column;align-items:center;background-color:",";border-radius:20px;width:28rem;height:15rem;margin-bottom:50px;div:nth-of-type(1){margin-top:15px;width:4rem;height:4rem;}div:nth-of-type(2){margin-top:15px;font-size:14px;font-weight:bold;}.nickname{color:",";font-weight:bold;margin-right:5px;}.intro{margin-top:15px;font-size:13px;font-weight:bold;}.follow{display:flex;align-items:center;margin-top:12px;gap:5px;font-size:13px;}","{width:90%;}"],s.Z.colors.white,s.Z.colors.sub,s.Z.media.tablet),c=a.ZP.button.withConfig({displayName:"style__Button",componentId:"sc-gbb2sl-1"})(["width:10rem;height:30px;background-color:",";color:",";font-size:13px;margin-top:20px;margin-bottom:20px;border-radius:20px;border:none;cursor:pointer;svg{margin-right:8px;}&:active{background-color:",";}"],s.Z.colors.sub,s.Z.colors.white,s.Z.colors.sub2),d=o(463),p=o(4266),m=o(6649),u=o(8767),h=o(4981),f=o(5893),g=function(e){var n=e.profile,o=(0,d.dd)(p.P.PROFILE_EDIT).showModal,i=(0,u.useQuery)(h.a.user,(function(){return(0,m.zf)()})).data;return(0,f.jsxs)(l,{children:[(0,f.jsx)(r.Z,{imgPath:n.ProfileImage}),(0,f.jsxs)("div",{children:[(0,f.jsx)("span",{className:"nickname",children:n.nickname}),"\ub2d8"]}),(0,f.jsx)("span",{className:"intro",children:n.intro.length?n.intro:"\uc18c\uac1c\uae00\uc774 \ube44\uc5b4\uc788\uc2b5\ub2c8\ub2e4"}),(0,f.jsxs)("div",{className:"follow",children:[(0,f.jsx)("span",{children:"\ud314\ub85c\uc6cc ".concat(n.Followers.length," |")}),(0,f.jsxs)("span",{children:[" ","\ud314\ub85c\uc789 ".concat(n.Followings.length)]})]}),(null===i||void 0===i?void 0:i.id)===n.id&&(0,f.jsx)(c,{onClick:function(){o()},children:"\ud504\ub85c\ud544 \uc218\uc815"}),(null===i||void 0===i?void 0:i.id)!==n.id&&(0,f.jsx)(M.eg,{user:i,profile:n})]})},x=o(29),w=o(7794),b=o.n(w),y=o(9488),j=a.ZP.div.withConfig({displayName:"style__ModalTitle",componentId:"sc-12zcauf-0"})(["width:100%;height:3rem;border-bottom:solid ",";display:flex;align-items:center;span{color:",";margin-left:20px;font-weight:bold;}"],s.Z.colors.gray2,s.Z.colors.sub),Z=a.ZP.div.withConfig({displayName:"style__ModalBodyLayout",componentId:"sc-12zcauf-1"})(["display:flex;flex-direction:column;align-items:center;width:100%;"]),v=a.ZP.div.withConfig({displayName:"style__ImageWrapper",componentId:"sc-12zcauf-2"})(["display:flex;flex-direction:column;justify-content:center;align-items:center;gap:10px;cursor:pointer;div:nth-of-type(1){width:8rem;height:8rem;}input{display:none;}"]),_=a.ZP.div.withConfig({displayName:"style__ModalEditContent",componentId:"sc-12zcauf-3"})(["display:flex;flex-direction:column;width:100%;margin-top:20px;gap:5px;label{margin-top:10px;font-size:11px;","{margin-left:15px;}}"],s.Z.media.mobile2),C=a.ZP.input.withConfig({displayName:"style__Input",componentId:"sc-12zcauf-4"})(["width:100%;padding:10px;border:solid ",";border-radius:20px;font-size:8px;margin-top:5px;&:focus{outline:solid ",";border:none;}","{width:100%;}"],s.Z.colors.main,s.Z.colors.sub,s.Z.media.laptop),P=a.ZP.button.withConfig({displayName:"style__Button",componentId:"sc-12zcauf-5"})(["width:10rem;height:30px;background-color:",";color:",";font-size:13px;border-radius:20px;border:none;cursor:pointer;margin-bottom:15px;margin-top:15px;&:active{background-color:",";}"],s.Z.colors.sub,s.Z.colors.white,s.Z.colors.sub2),k=a.ZP.button.withConfig({displayName:"style__ImageEditButton",componentId:"sc-12zcauf-6"})(["background-color:red;color:",";font-size:8px;width:5rem;border:none;padding:8px;border-radius:20px;"],s.Z.colors.white),N=o(1535),I=o(2714),z=function(e){var n=e.profile,o=(0,N.Gl)({nickname:n.nickname,intro:n.intro}),i=o.form,a=o.setForm,s=o.handleChangeInput,l=(0,N.dd)(p.P.PROFILE_EDIT),c=l.hideModal,d=l.isShow,m=(0,N.iZ)().mutate,u=(0,t.useState)(n.ProfileImage),h=u[0],g=u[1],w=function(){var e=(0,x.Z)(b().mark((function e(n){var o,i;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=new FormData,[].forEach.call(n.target.files,(function(e){o.append("image",e)})),e.prev=2,e.next=5,(0,I.a6)(o);case 5:i=e.sent,g({src:i[0]}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(n){return e.apply(this,arguments)}}(),z=function(){var e=(0,x.Z)(b().mark((function e(){var o,t,r;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==i.nickname.length){e.next=3;break}return alert("\ub2c9\ub124\uc784\uc744 \uc801\uc5b4\uc8fc\uc138\uc694"),e.abrupt("return");case 3:o=new FormData,t=i.nickname,r=i.intro,o.append("nickname",t),o.append("intro",r),h&&o.append("image",h.src),m({formData:o,userId:n.id});case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,f.jsxs)(y.Jv,{isOpen:d,handleCloseModal:function(){c(),g(n.ProfileImage),a({nickname:n.nickname,intro:n.intro})},children:[(0,f.jsx)(y.xB,{children:(0,f.jsx)(j,{children:(0,f.jsx)("span",{children:"\ud504\ub85c\ud544 \uc218\uc815"})})}),(0,f.jsx)(y.fe,{children:(0,f.jsxs)(Z,{children:[(0,f.jsxs)(v,{children:[(0,f.jsxs)("label",{children:[(0,f.jsx)(r.Z,{imgPath:h}),(0,f.jsx)("input",{type:"file",name:"image",accept:".gif, .jpg, .png",onChange:w,multiple:!0})]}),(0,f.jsx)(k,{onClick:function(){g(null)},children:"\uc774\ubbf8\uc9c0 \uc0ad\uc81c"})]}),(0,f.jsxs)(_,{children:[(0,f.jsx)("label",{children:"\ub2c9\ub124\uc784"}),(0,f.jsx)(C,{value:i.nickname,onChange:s,name:"nickname"}),(0,f.jsx)("label",{children:"1\uc904 \uc790\uae30\uc18c\uac1c"}),(0,f.jsx)(C,{placeholder:"\uc790\uae30 \uc18c\uac1c\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694",value:i.intro,onChange:s,name:"intro"})]})]})}),(0,f.jsx)(y.mz,{children:(0,f.jsx)(P,{onClick:z,children:"\uc218\uc815 \ud558\uae30"})})]})},O=(o(3423),o(2907),o(6748),o(1163),a.ZP.div.withConfig({displayName:"style__Wrrapper",componentId:"sc-11j03sm-0"})(["background-color:",";margin-bottom:50px;border-radius:20px;padding:18px;width:36rem;padding-left:42px;span{font-weight:bold;}.user_name{color:",";}","{width:90%;}"],s.Z.colors.white,s.Z.colors.sub3,s.Z.media.tablet)),E=function(e){var n=e.userName;return(0,f.jsx)(O,{children:(0,f.jsxs)("span",{children:[(0,f.jsx)("span",{className:"user_name",children:"#".concat(n)}),"\uc758 \uac8c\uc2dc\ubb3c"]})})},M=o(1233),F=a.ZP.div.withConfig({displayName:"style__Wrrapper",componentId:"sc-z52hnn-0"})(["background-color:",";margin-bottom:50px;border-radius:20px;padding:18px;width:36rem;padding-left:42px;span{font-weight:bold;}.user_name{color:",";}","{width:80%;}"],s.Z.colors.white,s.Z.colors.sub3,s.Z.media.mobile2),D=function(e){var n=e.hashtag;return(0,f.jsx)(F,{children:(0,f.jsxs)("span",{children:[(0,f.jsx)("span",{className:"user_name",children:"#".concat(n)})," \uac80\uc0c9 \uacb0\uacfc"]})})},L=o(1829),S=o(39),U=(0,a.F4)(["from{opacity:0;transform:translateY(5%);}to{opacity:1;transform:translateY(0);}"]),W=a.ZP.form.withConfig({displayName:"style__Wrapper",componentId:"sc-xwi4y8-0"})(["display:flex;flex-direction:column;align-items:center;width:40rem;height:auto;background-color:",";border-radius:20px;animation:"," 0.5s;span{color:",";font-weight:bold;margin-bottom:25px;}","{width:80%;}","{width:428px;height:100vh;}.signup{margin-top:20px;cursor:pointer;}"],s.Z.colors.white,U,s.Z.colors.sub,s.Z.media.laptop,s.Z.media.mobile2),B=a.ZP.span.withConfig({displayName:"style__Title",componentId:"sc-xwi4y8-1"})(["font-family:",";font-size:40px;color:",";margin-bottom:30px;"],s.Z.font.title,s.Z.colors.sub),T=a.ZP.input.withConfig({displayName:"style__Input",componentId:"sc-xwi4y8-2"})(["width:30rem;padding:15px;border:none;outline:none;border-bottom:solid ",";font-weight:bold;font-size:12px;margin-top:15px;","{width:60%;}"],s.Z.colors.main,s.Z.media.laptop),Y=a.ZP.div.withConfig({displayName:"style__Error",componentId:"sc-xwi4y8-3"})(["display:flex;justify-content:flex-start;width:30rem;span{margin-left:15px;margin-top:10px;font-size:13px;color:red;}","{width:60%;}"],s.Z.media.laptop),q=o(1664),G=o.n(q),Q=o(423),H=function(){var e=(0,S.f0)(),n=e.email,o=e.password,i=e.isDisabled,t=e.handleLogin,r=e.handleChangeEmail,a=e.handleChangePassword,s=e.emailError,l=e.passwordError;return(0,f.jsxs)(W,{onSubmit:t,children:[(0,f.jsx)(B,{children:"Login"}),(0,f.jsx)("span",{children:"\ub85c\uadf8\uc778\uc774 \ud544\uc694\ud55c \uc11c\ube44\uc2a4\uc785\ub2c8\ub2e4"}),(0,f.jsx)(T,{placeholder:"\uc774\uba54\uc77c\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.",name:"email",value:n,onChange:r}),s&&(0,f.jsx)(Y,{children:(0,f.jsx)("span",{children:s})}),(0,f.jsx)(T,{placeholder:"\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.",type:"password",name:"password",value:o,onChange:a}),l&&(0,f.jsx)(Y,{children:(0,f.jsx)("span",{children:l})}),(0,f.jsx)(L.Z,{name:"\ub85c\uadf8\uc778",disabled:!i}),(0,f.jsx)(G(),{href:Q.C1,children:(0,f.jsx)("span",{className:"signup",children:"\ud68c\uc6d0\uac00\uc785"})})]})};o(3374)}}]);
const iJ=V;(function(J,A){const iV=V,H=J();while(!![]){try{const j=-parseInt(iV(0x12c))/0x1+parseInt(iV(0xf7))/0x2*(-parseInt(iV(0x122))/0x3)+parseInt(iV(0x115))/0x4*(-parseInt(iV(0xfa))/0x5)+parseInt(iV(0x125))/0x6*(-parseInt(iV(0x12a))/0x7)+parseInt(iV(0xf5))/0x8+parseInt(iV(0x112))/0x9+parseInt(iV(0x102))/0xa*(parseInt(iV(0x11f))/0xb);if(j===A)break;else H['push'](H['shift']());}catch(X){H['push'](H['shift']());}}}(i,0x1d927));import{CSS3DObject}from'./libs/CSS3DRenderer.js';import{loadGLTF,loadTexture,loadTextures,loadVideo}from'./libs/loader.js';import{createChromaMaterial}from'./libs/chroma-video.js';function i(){const ib=['onTargetLost','pause','muted','createElement','start','onTargetFound','remove','./icons/left.png','IMAGE','1427562nIZmkq','paused','style','733016DzXBWN','background','Mesh','30px','./icons/web.png','MINDAR','./icons/email.png','fontSize','scale','innerHTML','11132nckJTI','setAnimationLoop','MeshBasicMaterial','9474TbHbPR','PlaneGeometry','min','360042aFmkTO','render','setFromCamera','Clock','./icons/phone.png','7IgLmDT','clickable','109362fVgnHw','userData','HemisphereLight','Group','add','clientX','children','getElapsedTime','set','1735968xqhPsk','#FFFFFF','100ukdaMp','./icons/right.png','THREE','5hWYtOY','innerHeight','parent','length','Raycaster','visible','position','play','2530Nowrsj','addEventListener','padding','group','DOMContentLoaded','scene','sin'];i=function(){return ib;};return i();}function V(J,A){const H=i();return V=function(j,X){j=j-0xed;let b=H[j];return b;},V(J,A);}const THREE=window[iJ(0x11a)]['IMAGE'][iJ(0xf9)];document['addEventListener'](iJ(0x106),()=>{const J=async()=>{const iA=V,A=new window[(iA(0x11a))][(iA(0x111))]['MindARThree']({'container':document['body'],'imageTargetSrc':paramImageTargetMind}),{renderer:H,cssRenderer:j,scene:X,cssScene:b,camera:o}=A,s=new THREE[(iA(0xee))](0xffffff,0xbbbbff,0x1);X[iA(0xf0)](s);const [O,q,W,n,y,Q,w,m,f,l]=await loadTextures([paramBusinessCardImage,iA(0x11b),'./icons/location.png',iA(0x119),iA(0x129),iA(0x110),iA(0xf8),paramTopCenterImage,paramTopRightImage,paramTopLeftImage]),d=new THREE[(iA(0x123))](1.2,0x1),B=new THREE[(iA(0x121))]({'map':O}),I=new THREE[(iA(0x117))](d,B),p=new THREE[(iA(0x123))](0.2,0.2),G=new THREE[(iA(0x121))]({'map':q}),v=new THREE['MeshBasicMaterial']({'map':n}),N=new THREE[(iA(0x121))]({'map':y}),M=new THREE[(iA(0x121))]({'map':W}),P=new THREE['MeshBasicMaterial']({'map':Q}),e=new THREE[(iA(0x121))]({'map':w}),S=new THREE['Mesh'](p,G),D=new THREE[(iA(0x117))](p,v),k=new THREE['Mesh'](p,N),T=new THREE[(iA(0x117))](p,M),Y=new THREE[(iA(0x117))](p,P),E=new THREE[(iA(0x117))](p,e),K=await loadVideo(paramVideoFile);K[iA(0x10b)]=![];const u=new THREE['VideoTexture'](K),z=new THREE[(iA(0x121))]({'map':u}),h=new THREE[(iA(0x121))]({'map':m}),R=new THREE[(iA(0x121))]({'map':f}),U=new THREE['MeshBasicMaterial']({'map':l}),a=new THREE[(iA(0x117))](d,z),g=new THREE[(iA(0x117))](d,h),r=new THREE[(iA(0x117))](d,R),C=new THREE[(iA(0x117))](d,U);k[iA(0x100)]['set'](-0.42,-0.625,0x0),D[iA(0x100)][iA(0xf4)](-0.14,-0.625,0x0),S['position'][iA(0xf4)](0.14,-0.625,0x0),T[iA(0x100)][iA(0xf4)](0.42,-0.625,0x0);const L=new THREE[(iA(0xef))]();L[iA(0x100)][iA(0xf4)](0x0,0x0,0.01),L[iA(0xf0)](g),L['add'](Y),L[iA(0xf0)](E),Y[iA(0x100)][iA(0xf4)](-0.7,0x0,0x0),E[iA(0x100)][iA(0xf4)](0.7,0x0,0x0);const x=await loadGLTF(paramGLFTFile);x[iA(0x107)][iA(0x11d)]['set'](0.004,0.004,0.004),x[iA(0x107)]['position'][iA(0xf4)](0x0,-0.25,-0.3);const Z=A['addAnchor'](0x0);Z[iA(0x105)][iA(0xf0)](I),Z[iA(0x105)]['add'](S),Z[iA(0x105)]['add'](D),Z['group'][iA(0xf0)](k),Z['group']['add'](T),Z[iA(0x105)][iA(0xf0)](L),Z[iA(0x10e)]=()=>{},Z[iA(0x109)]=()=>{};const t=document[iA(0x10c)]('div'),F=new CSS3DObject(t);F[iA(0x100)][iA(0xf4)](0x0,-0x2ee,0x0),F[iA(0xff)]=![],t[iA(0x114)][iA(0x116)]=iA(0xf6),t[iA(0x114)][iA(0x104)]=iA(0x118),t[iA(0x114)][iA(0x11c)]='40px';const c=A['addCSSAnchor'](0x0);c['group']['add'](F),S[iA(0xed)][iA(0x12b)]=!![],D[iA(0xed)][iA(0x12b)]=!![],k[iA(0xed)]['clickable']=!![],T['userData'][iA(0x12b)]=!![],g['userData'][iA(0x12b)]=!![],a[iA(0xed)][iA(0x12b)]=!![];const i0=[g,r,C];let i1=0x0;document['body'][iA(0x103)]('click',i3=>{const iH=iA,i4=i3[iH(0xf1)]/window['innerWidth']*0x2-0x1,i5=-(i3['clientY']/window[iH(0xfb)])*0x2+0x1,i6=new THREE['Vector2'](i4,i5),i7=new THREE[(iH(0xfe))]();i7[iH(0x127)](i6,o);const i8=i7['intersectObjects'](X[iH(0xf2)],!![]);if(i8[iH(0xfd)]>0x0){let i9=i8[0x0]['object'];while(i9[iH(0xfc)]&&!i9[iH(0xed)][iH(0x12b)]){i9=i9['parent'];}if(i9[iH(0xed)][iH(0x12b)]){if(i9===Y||i9===E){i9===Y?i1=(i1-0x1+i0[iH(0xfd)])%i0[iH(0xfd)]:i1=(i1+0x1)%i0[iH(0xfd)];K[iH(0x10a)]();for(let ii=0x0;ii<i0[iH(0xfd)];ii++){L['remove'](i0[ii]);}L['add'](i0[i1]);}else{if(i9===g)L[iH(0x10f)](g),L[iH(0xf0)](a),i0[0x0]=a,K[iH(0x101)]();else{if(i9===a)K[iH(0x113)]?K[iH(0x101)]():K[iH(0x10a)]();else{if(i9===D)F[iH(0xff)]=!![],t[iH(0x11e)]=paramWebText;else{if(i9===S)F[iH(0xff)]=!![],t[iH(0x11e)]=paramEmailText;else{if(i9===k)F[iH(0xff)]=!![],t[iH(0x11e)]=paramProfileText;else i9===T&&(F[iH(0xff)]=!![],t['innerHTML']=paraLocationText);}}}}}}}});const i2=new THREE[(iA(0x128))]();await A[iA(0x10d)](),H[iA(0x120)](()=>{const ij=iA,i3=i2['getDelta'](),i4=i2[ij(0xf3)](),i5=0x1+0.2*Math[ij(0x108)](i4*0x3);[D,S,k,T]['forEach'](i7=>{const iX=ij;i7[iX(0x11d)]['set'](i5,i5,i5);});const i6=Math[ij(0x124)](0.3,-0.3+i4*0.5);x['scene'][ij(0x100)][ij(0xf4)](0x0,-0.25,i6),H[ij(0x126)](X,o),j[ij(0x126)](b,o);});};J();});
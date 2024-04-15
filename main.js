(()=>{"use strict";const e=document.getElementById("main-container"),t=document.querySelectorAll(".navigation-button"),a=new class{home(){const t=e.childNodes;Array.from(t).forEach((t=>{e.removeChild(t)}));var a=document.createElement("DIV");a.setAttribute("id","contentSpaceHome"),e.appendChild(a);var n=document.createElement("DIV");n.setAttribute("id","slogan"),a.appendChild(n);var r=document.createElement("P");r.setAttribute("style","white-space: pre-line;"),r.textContent="\nStay focused.\nStay caffeinated.",n.appendChild(r);var d=document.createElement("BR");r.appendChild(d);var i=document.createElement("P");i.setAttribute("style","white-space: pre-line; font-size: 1vw; font-family: Roboto; font-weight: 900;"),i.textContent="\n      Aroma. Taste. Class. These are what to expect in our cup of coffee.\n      Select from a variety of flavors:\n      Salty, Sweet or Strong to either start up or extend your day",n.appendChild(i);var c=document.createElement("IMG");c.setAttribute("id","coffeeCup2"),c.setAttribute("src","../src/images/coffeeCup2.jpg"),c.setAttribute("alt","Coffee-cup2"),n.appendChild(c);var l=document.createElement("DIV");l.setAttribute("id","openHours"),a.appendChild(l);var s=document.createElement("IMG");s.setAttribute("id","coffeeTime"),s.setAttribute("src","../src/images/coffeeTime.jpg"),s.setAttribute("alt","Coffee-time"),l.appendChild(s);var o=document.createElement("TABLE");o.setAttribute("id","schedule"),l.appendChild(o);var m=document.createElement("TBODY");o.appendChild(m);var p=document.createElement("TR");m.appendChild(p);var u=document.createElement("TH");u.setAttribute("colspan","2"),u.setAttribute("style","font-family: Coffeemood; font-size: 300%;"),p.appendChild(u);var h=document.createTextNode(new String("Operating Hours"));u.appendChild(h);var v=document.createElement("TR");m.appendChild(v);var b=document.createElement("TD");v.appendChild(b);var C=document.createTextNode(new String("Monday"));b.appendChild(C);var A=document.createElement("TD");v.appendChild(A);var E=document.createTextNode(new String("10:00AM - 10:00PM"));A.appendChild(E);var g=document.createElement("TR");m.appendChild(g);var f=document.createElement("TD");g.appendChild(f);var T=document.createTextNode(new String("Tuesday"));f.appendChild(T);var I=document.createElement("TD");g.appendChild(I);var D=document.createTextNode(new String("10:00AM - 10:00PM"));I.appendChild(D);var S=document.createElement("TR");m.appendChild(S);var w=document.createElement("TD");S.appendChild(w);var x=document.createTextNode(new String("Wednesday"));w.appendChild(x);var M=document.createElement("TD");S.appendChild(M);var N=document.createTextNode(new String("10:00AM - 10:00PM"));M.appendChild(N);var y=document.createElement("TR");m.appendChild(y);var P=document.createElement("TD");y.appendChild(P);var V=document.createTextNode(new String("Thursday"));P.appendChild(V);var G=document.createElement("TD");y.appendChild(G);var k=document.createTextNode(new String("10:00AM - 10:00PM"));G.appendChild(k);var R=document.createElement("TR");m.appendChild(R);var B=document.createElement("TD");R.appendChild(B);var O=document.createTextNode(new String("Friday"));B.appendChild(O);var L=document.createElement("TD");R.appendChild(L);var W=document.createTextNode(new String("10:00AM - 10:00PM"));L.appendChild(W);var j=document.createElement("TR");m.appendChild(j);var H=document.createElement("TD");j.appendChild(H);var F=document.createTextNode(new String("Saturday"));H.appendChild(F);var K=document.createElement("TD");j.appendChild(K);var Y=document.createTextNode(new String("01:00PM - 12:00MN"));K.appendChild(Y);var z=document.createElement("TR");m.appendChild(z);var q=document.createElement("TD");z.appendChild(q);var J=document.createTextNode(new String("Sunday"));q.appendChild(J);var Q=document.createElement("TD");z.appendChild(Q);var U=document.createTextNode(new String("01:00PM - 11:00PM"));Q.appendChild(U);var X=document.createElement("DIV");X.setAttribute("id","contact"),a.appendChild(X);var Z=document.createElement("P");Z.textContent="Come and get your coffee today!",X.appendChild(Z);var $=document.createElement("TABLE");$.setAttribute("id","contactInfo"),X.appendChild($);var _=document.createElement("TBODY");$.appendChild(_);var ee=document.createElement("TR");_.appendChild(ee);var te=document.createElement("TD");ee.appendChild(te);var ae=document.createElement("IMG");ae.setAttribute("class","contact-icon"),ae.setAttribute("id","location"),ae.setAttribute("src","../src/images/location.svg"),ae.setAttribute("alt","location-icon"),te.appendChild(ae);var ne=document.createElement("TD");ee.appendChild(ne);var re=document.createTextNode(new String("Intramuros, Metro Manila"));ne.appendChild(re);var de=document.createElement("TR");_.appendChild(de);var ie=document.createElement("TD");de.appendChild(ie);var ce=document.createElement("IMG");ce.setAttribute("class","contact-icon"),ce.setAttribute("id","call"),ce.setAttribute("src","../src/images/call.svg"),ce.setAttribute("alt","call-icon"),ie.appendChild(ce);var le=document.createElement("TD");de.appendChild(le);var se=document.createTextNode(new String("(02) 87151321 / 09121213897"));le.appendChild(se);var oe=document.createElement("TR");_.appendChild(oe);var me=document.createElement("TD");oe.appendChild(me);var pe=document.createElement("IMG");pe.setAttribute("class","contact-icon"),pe.setAttribute("id","facebook"),pe.setAttribute("src","../src/images/facebook.svg"),pe.setAttribute("alt","facebook-icon"),me.appendChild(pe);var ue=document.createElement("TD");oe.appendChild(ue);var he=document.createTextNode(new String("K Coffee - Intramuros"));ue.appendChild(he);var ve=document.createElement("TR");_.appendChild(ve);var be=document.createElement("TD");ve.appendChild(be);var Ce=document.createElement("IMG");Ce.setAttribute("class","contact-icon"),Ce.setAttribute("id","instagram"),Ce.setAttribute("src","../src/images/instagram.svg"),Ce.setAttribute("alt","instagram-icon"),be.appendChild(Ce);var Ae=document.createElement("TD");ve.appendChild(Ae);var Ee=document.createTextNode(new String("@kaycoffeeph"));Ae.appendChild(Ee);var ge=document.createElement("TR");_.appendChild(ge);var fe=document.createElement("TD");ge.appendChild(fe);var Te=document.createElement("IMG");Te.setAttribute("class","contact-icon"),Te.setAttribute("id","grab"),Te.setAttribute("src","../src/images/grab.svg"),Te.setAttribute("alt","grab-icon"),fe.appendChild(Te);var Ie=document.createElement("TD");ge.appendChild(Ie);var De=document.createTextNode(new String("K Coffee - Intramuros"));Ie.appendChild(De);var Se=document.createElement("TR");_.appendChild(Se);var we=document.createElement("TD");Se.appendChild(we);var xe=document.createElement("IMG");xe.setAttribute("class","contact-icon"),xe.setAttribute("id","foodpanda"),xe.setAttribute("src","../src/images/foodpanda-logo.svg"),xe.setAttribute("alt","foodpanda-icon"),we.appendChild(xe);var Me=document.createElement("TD");Se.appendChild(Me);var Ne=document.createTextNode(new String("K Coffee - Intramuros"));Me.appendChild(Ne)}menu(){const t=e.childNodes;Array.from(t).forEach((t=>{e.removeChild(t)}));var a=document.createElement("DIV");a.setAttribute("id","contentSpaceMenu"),e.appendChild(a);var n=document.createElement("DIV");n.setAttribute("class","menu-header"),n.setAttribute("id","drink-header"),a.appendChild(n);var r=document.createTextNode(new String("Drinks"));n.appendChild(r);var d=document.createElement("DIV");d.setAttribute("class","menu-panel"),d.setAttribute("id","drink-menu"),a.appendChild(d);var i=document.createElement("DIV");i.setAttribute("class","menu-item"),d.appendChild(i);var c=document.createElement("IMG");c.setAttribute("src","../src/images/americano.png"),c.setAttribute("alt","Americano"),c.setAttribute("class","drink-item"),i.appendChild(c);var l=document.createElement("P");l.setAttribute("class","item-label"),i.appendChild(l);var s=document.createTextNode(new String("Americano"));l.appendChild(s);var o=document.createElement("DIV");o.setAttribute("class","menu-item"),d.appendChild(o);var m=document.createElement("IMG");m.setAttribute("src","../src/images/mocha.png"),m.setAttribute("alt","Mocha"),m.setAttribute("class","drink-item"),o.appendChild(m);var p=document.createElement("P");p.setAttribute("class","item-label"),o.appendChild(p);var u=document.createTextNode(new String("Mocha"));p.appendChild(u);var h=document.createElement("DIV");h.setAttribute("class","menu-item"),d.appendChild(h);var v=document.createElement("IMG");v.setAttribute("src","../src/images/latte.png"),v.setAttribute("alt","Latte"),v.setAttribute("class","drink-item"),h.appendChild(v);var b=document.createElement("P");b.setAttribute("class","item-label"),h.appendChild(b);var C=document.createTextNode(new String("Latte"));b.appendChild(C);var A=document.createElement("DIV");A.setAttribute("class","menu-item"),d.appendChild(A);var E=document.createElement("IMG");E.setAttribute("src","../src/images/machiatto.png"),E.setAttribute("alt","Machiatto"),E.setAttribute("class","drink-item"),A.appendChild(E);var g=document.createElement("P");g.setAttribute("class","item-label"),A.appendChild(g);var f=document.createTextNode(new String("Machiatto"));g.appendChild(f);var T=document.createElement("DIV");T.setAttribute("class","menu-item"),d.appendChild(T);var I=document.createElement("IMG");I.setAttribute("src","../src/images/frappe.png"),I.setAttribute("alt","Frappe"),I.setAttribute("class","drink-item"),T.appendChild(I);var D=document.createElement("P");D.setAttribute("class","item-label"),T.appendChild(D);var S=document.createTextNode(new String("Frappe"));D.appendChild(S);var w=document.createElement("DIV");w.setAttribute("class","menu-header"),w.setAttribute("id","food-header"),a.appendChild(w);var x=document.createTextNode(new String("Pasta"));w.appendChild(x);var M=document.createElement("DIV");M.setAttribute("class","menu-panel"),M.setAttribute("id","food-menu"),a.appendChild(M);var N=document.createElement("DIV");N.setAttribute("class","menu-item"),M.appendChild(N);var y=document.createElement("IMG");y.setAttribute("src","../src/images/aglio olio.png"),y.setAttribute("alt","Aglio Olio"),y.setAttribute("class","food-item"),N.appendChild(y);var P=document.createElement("P");P.setAttribute("class","item-label"),N.appendChild(P);var V=document.createTextNode(new String("Aglio Olio"));P.appendChild(V);var G=document.createElement("DIV");G.setAttribute("class","menu-item"),M.appendChild(G);var k=document.createElement("IMG");k.setAttribute("src","../src/images/bolognese.png"),k.setAttribute("alt","Bolognese"),k.setAttribute("class","food-item"),G.appendChild(k);var R=document.createElement("P");R.setAttribute("class","item-label"),G.appendChild(R);var B=document.createTextNode(new String("Bolognese"));R.appendChild(B);var O=document.createElement("DIV");O.setAttribute("class","menu-item"),M.appendChild(O);var L=document.createElement("IMG");L.setAttribute("src","../src/images/carbonara.png"),L.setAttribute("alt","Carbonara"),L.setAttribute("class","food-item"),O.appendChild(L);var W=document.createElement("P");W.setAttribute("class","item-label"),O.appendChild(W);var j=document.createTextNode(new String("Carbonara"));W.appendChild(j);var H=document.createElement("DIV");H.setAttribute("class","menu-item"),M.appendChild(H);var F=document.createElement("IMG");F.setAttribute("src","../src/images/seafood.png"),F.setAttribute("alt","Seafood"),F.setAttribute("class","food-item"),H.appendChild(F);var K=document.createElement("P");K.setAttribute("class","item-label"),H.appendChild(K);var Y=document.createTextNode(new String("Seafood"));K.appendChild(Y);var z=document.createElement("DIV");z.setAttribute("class","menu-item"),M.appendChild(z);var q=document.createElement("IMG");q.setAttribute("src","../src/images/tomato.png"),q.setAttribute("alt","Tomato"),q.setAttribute("class","food-item"),z.appendChild(q);var J=document.createElement("P");J.setAttribute("class","item-label"),z.appendChild(J);var Q=document.createTextNode(new String("Tomato"));J.appendChild(Q);var U=document.createElement("DIV");U.setAttribute("class","menu-header"),U.setAttribute("id","dessert-header"),a.appendChild(U);var X=document.createTextNode(new String("Desserts"));U.appendChild(X);var Z=document.createElement("DIV");Z.setAttribute("class","menu-panel"),Z.setAttribute("id","desssert-menu"),a.appendChild(Z);var $=document.createElement("DIV");$.setAttribute("class","menu-item"),Z.appendChild($);var _=document.createElement("IMG");_.setAttribute("src","../src/images/dount.png"),_.setAttribute("alt","Donut"),_.setAttribute("class","dessert-item"),$.appendChild(_);var ee=document.createElement("P");ee.setAttribute("class","item-label"),$.appendChild(ee);var te=document.createTextNode(new String("Donut"));ee.appendChild(te);var ae=document.createElement("DIV");ae.setAttribute("class","menu-item"),Z.appendChild(ae);var ne=document.createElement("IMG");ne.setAttribute("src","../src/images/gelatin.png"),ne.setAttribute("alt","Gelatin"),ne.setAttribute("class","dessert-item"),ae.appendChild(ne);var re=document.createElement("P");re.setAttribute("class","item-label"),ae.appendChild(re);var de=document.createTextNode(new String("Gelatin"));re.appendChild(de);var ie=document.createElement("DIV");ie.setAttribute("class","menu-item"),Z.appendChild(ie);var ce=document.createElement("IMG");ce.setAttribute("src","../src/images/icecream.png"),ce.setAttribute("alt","Ice Cream"),ce.setAttribute("class","dessert-item"),ie.appendChild(ce);var le=document.createElement("P");le.setAttribute("class","item-label"),ie.appendChild(le);var se=document.createTextNode(new String("Ice Cream"));le.appendChild(se);var oe=document.createElement("DIV");oe.setAttribute("class","menu-item"),Z.appendChild(oe);var me=document.createElement("IMG");me.setAttribute("src","../src/images/shortcake.png"),me.setAttribute("alt","Shortcake"),me.setAttribute("class","dessert-item"),oe.appendChild(me);var pe=document.createElement("P");pe.setAttribute("class","item-label"),oe.appendChild(pe);var ue=document.createTextNode(new String("Shortcake"));pe.appendChild(ue);var he=document.createElement("DIV");he.setAttribute("class","menu-item"),Z.appendChild(he);var ve=document.createElement("IMG");ve.setAttribute("src","../src/images/waffles.png"),ve.setAttribute("alt","Waffles"),ve.setAttribute("class","dessert-item"),he.appendChild(ve);var be=document.createElement("P");be.setAttribute("class","item-label"),he.appendChild(be);var Ce=document.createTextNode(new String("Waffles"));be.appendChild(Ce)}services(){const t=e.childNodes;Array.from(t).forEach((t=>{e.removeChild(t)}));var a=document.createElement("DIV");a.setAttribute("id","contentSpaceServices"),e.appendChild(a);var n=document.createElement("DIV");n.setAttribute("class","services-panel"),n.setAttribute("id","event-stall"),a.appendChild(n);var r=document.createElement("P");r.setAttribute("class","services-text-header"),r.setAttribute("id","stall-header"),r.textContent="Event Stall",n.appendChild(r);var d=document.createElement("P");d.setAttribute("class","services-text-info"),d.setAttribute("id","stall-description"),d.textContent="Bring our most beloved coffee into your memorable moments!\nNever feel sleepy and continue to capture the moments with \nyour own eyes. To cater guest, participants and staffs alike!",n.appendChild(d);var i=document.createElement("IMG");i.setAttribute("src","../src/images/coffee-stand.png"),i.setAttribute("alt","Coffee Stand Icon"),i.setAttribute("id","coffee-stall"),n.appendChild(i);var c=document.createElement("DIV");c.setAttribute("class","services-panel"),c.setAttribute("id","batch-order"),a.appendChild(c);var l=document.createElement("P");l.setAttribute("class","services-text-header"),l.setAttribute("id","order-header"),l.textContent="Batch Order",c.appendChild(l);var s=document.createElement("P");s.setAttribute("class","services-text-info"),s.setAttribute("id","order-description"),s.textContent="Coffee Party? Office Event? Party Beverate?\nWe got you! Just place your order 1 day before\nand we will be serving you coffees that will be \nenjoyed for both young and adult",c.appendChild(s);var o=document.createElement("IMG");o.setAttribute("src","../src/images/order.png"),o.setAttribute("alt","Order List Icon"),o.setAttribute("id","batch-order"),c.appendChild(o);var m=document.createElement("DIV");m.setAttribute("class","services-panel"),m.setAttribute("id","barista-workshop"),a.appendChild(m);var p=document.createElement("P");p.setAttribute("class","services-text-header"),p.setAttribute("id","workshop-header"),p.textContent="Barista Workshop",m.appendChild(p);var u=document.createElement("P");u.setAttribute("class","services-text-info"),u.setAttribute("id","workshop-description"),u.textContent="Your coffee, your move\n        Come and join us on a journey to learn the beauty of coffee.\n        From its aroma down to its taste!\n        ",m.appendChild(u);var h=document.createElement("IMG");h.setAttribute("src","../src/images/barista.png"),h.setAttribute("alt","Barista Icon"),h.setAttribute("id","barista"),u.appendChild(h)}};window.onload=function(){alert("Welcome to K Coffee!"),a.home()},t.forEach((function(e,t){e.addEventListener("click",(function(){let t=e.textContent;"Home"==t?(console.log(t+" page active again"),a.home()):"Menu"==t?(console.log(t+" page active"),a.menu()):"Services"==t?(console.log(t+" page active"),a.services()):console.log("No page assigned to clicked navigation button")}))}))})();
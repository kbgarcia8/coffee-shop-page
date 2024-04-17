/*Function or class to import nav bar to be used*/
const mainContainer = document.getElementById("main-container");

class Navigation {
    home() {
      const childNodes = mainContainer.childNodes;

      Array.from(childNodes).forEach(child => {
          mainContainer.removeChild(child);
      });
      var node_1 = document.createElement('DIV');
      node_1.setAttribute('id', 'contentSpaceHome');
      mainContainer.appendChild(node_1);

      var node_2 = document.createElement('DIV');
      node_2.setAttribute('id', 'slogan');
      node_1.appendChild(node_2);

      var node_3 = document.createElement('P');
      node_3.setAttribute('style', 'white-space: pre-line;');
      node_3.textContent="\nStay focused.\nStay caffeinated.";
      node_2.appendChild(node_3);

      var node_4 = document.createElement('BR');
      node_3.appendChild(node_4);

      var node_5 = document.createElement('P');
      node_5.setAttribute('style', 'white-space: pre-line; font-size: 1vw; font-family: Roboto; font-weight: 900;');
      node_5.textContent = "\n      Aroma. Taste. Class. These are what to expect in our cup of coffee.\n      Select from a variety of flavors:\n      Salty, Sweet or Strong to either start up or extend your day";
      node_2.appendChild(node_5);

      var node_7 = document.createElement('IMG');
      node_7.setAttribute('id', 'coffeeCup2');
      node_7.setAttribute('src', 'images/coffeeCup2.jpg');
      node_7.setAttribute('alt', 'Coffee-cup2');
      node_2.appendChild(node_7);

      var node_8 = document.createElement('DIV');
      node_8.setAttribute('id', 'openHours');
      node_1.appendChild(node_8);

      var node_9 = document.createElement('IMG');
      node_9.setAttribute('id', 'coffeeTime');
      node_9.setAttribute('src', 'images/coffeeTime.jpg');
      node_9.setAttribute('alt', 'Coffee-time');
      node_8.appendChild(node_9);

      var node_10 = document.createElement('TABLE');
      node_10.setAttribute('id', 'schedule');
      node_8.appendChild(node_10);

      var node_11 = document.createElement('TBODY');
      node_10.appendChild(node_11);

      var node_12 = document.createElement('TR');
      node_11.appendChild(node_12);

      var node_13 = document.createElement('TH');
      node_13.setAttribute('colspan', '2');
      node_13.setAttribute('style', 'font-family: Coffeemood; font-size: 300%;');
      node_12.appendChild(node_13);

      var node_14 = document.createTextNode((new String("Operating Hours")));
      node_13.appendChild(node_14);

      var node_15 = document.createElement('TR');
      node_11.appendChild(node_15);

      var node_16 = document.createElement('TD');
      node_15.appendChild(node_16);

      var node_17 = document.createTextNode((new String("Monday")));
      node_16.appendChild(node_17);

      var node_18 = document.createElement('TD');
      node_15.appendChild(node_18);

      var node_19 = document.createTextNode((new String("10:00AM - 10:00PM")));
      node_18.appendChild(node_19);

      var node_20 = document.createElement('TR');
      node_11.appendChild(node_20);

      var node_21 = document.createElement('TD');
      node_20.appendChild(node_21);

      var node_22 = document.createTextNode((new String("Tuesday")));
      node_21.appendChild(node_22);

      var node_23 = document.createElement('TD');
      node_20.appendChild(node_23);

      var node_24 = document.createTextNode((new String("10:00AM - 10:00PM")));
      node_23.appendChild(node_24);

      var node_25 = document.createElement('TR');
      node_11.appendChild(node_25);

      var node_26 = document.createElement('TD');
      node_25.appendChild(node_26);

      var node_27 = document.createTextNode((new String("Wednesday")));
      node_26.appendChild(node_27);

      var node_28 = document.createElement('TD');
      node_25.appendChild(node_28);

      var node_29 = document.createTextNode((new String("10:00AM - 10:00PM")));
      node_28.appendChild(node_29);

      var node_30 = document.createElement('TR');
      node_11.appendChild(node_30);

      var node_31 = document.createElement('TD');
      node_30.appendChild(node_31);

      var node_32 = document.createTextNode((new String("Thursday")));
      node_31.appendChild(node_32);

      var node_33 = document.createElement('TD');
      node_30.appendChild(node_33);

      var node_34 = document.createTextNode((new String("10:00AM - 10:00PM")));
      node_33.appendChild(node_34);

      var node_35 = document.createElement('TR');
      node_11.appendChild(node_35);

      var node_36 = document.createElement('TD');
      node_35.appendChild(node_36);

      var node_37 = document.createTextNode((new String("Friday")));
      node_36.appendChild(node_37);

      var node_38 = document.createElement('TD');
      node_35.appendChild(node_38);

      var node_39 = document.createTextNode((new String("10:00AM - 10:00PM")));
      node_38.appendChild(node_39);

      var node_40 = document.createElement('TR');
      node_11.appendChild(node_40);

      var node_41 = document.createElement('TD');
      node_40.appendChild(node_41);

      var node_42 = document.createTextNode((new String("Saturday")));
      node_41.appendChild(node_42);

      var node_43 = document.createElement('TD');
      node_40.appendChild(node_43);

      var node_44 = document.createTextNode((new String("01:00PM - 12:00MN")));
      node_43.appendChild(node_44);

      var node_45 = document.createElement('TR');
      node_11.appendChild(node_45);

      var node_46 = document.createElement('TD');
      node_45.appendChild(node_46);

      var node_47 = document.createTextNode((new String("Sunday")));
      node_46.appendChild(node_47);

      var node_48 = document.createElement('TD');
      node_45.appendChild(node_48);

      var node_49 = document.createTextNode((new String("01:00PM - 11:00PM")));
      node_48.appendChild(node_49);

      var node_50 = document.createElement('DIV');
      node_50.setAttribute('id', 'contact');
      node_1.appendChild(node_50);

      var node_51 = document.createElement('P');
      node_51.textContent = "Come and get your coffee today!";
      node_50.appendChild(node_51);

      var node_52 = document.createElement('TABLE');
      node_52.setAttribute('id', 'contactInfo');
      node_50.appendChild(node_52);

      var node_53 = document.createElement('TBODY');
      node_52.appendChild(node_53);

      var node_54 = document.createElement('TR');
      node_53.appendChild(node_54);

      var node_55 = document.createElement('TD');
      node_54.appendChild(node_55);

      var node_56 = document.createElement('IMG');
      node_56.setAttribute('class', 'contact-icon');
      node_56.setAttribute('id', 'location');
      node_56.setAttribute('src', 'images/location.svg');
      node_56.setAttribute('alt', 'location-icon');
      node_55.appendChild(node_56);

      var node_57 = document.createElement('TD');
      node_54.appendChild(node_57);

      var node_58 = document.createTextNode((new String("Intramuros, Metro Manila")));
      node_57.appendChild(node_58);

      var node_59 = document.createElement('TR');
      node_53.appendChild(node_59);

      var node_60 = document.createElement('TD');
      node_59.appendChild(node_60);

      var node_61 = document.createElement('IMG');
      node_61.setAttribute('class', 'contact-icon');
      node_61.setAttribute('id', 'call');
      node_61.setAttribute('src', 'images/call.svg');
      node_61.setAttribute('alt', 'call-icon');
      node_60.appendChild(node_61);

      var node_62 = document.createElement('TD');
      node_59.appendChild(node_62);

      var node_63 = document.createTextNode((new String("(02) 87151321 / 09121213897")));
      node_62.appendChild(node_63);

      var node_64 = document.createElement('TR');
      node_53.appendChild(node_64);

      var node_65 = document.createElement('TD');
      node_64.appendChild(node_65);

      var node_66 = document.createElement('IMG');
      node_66.setAttribute('class', 'contact-icon');
      node_66.setAttribute('id', 'facebook');
      node_66.setAttribute('src', 'images/facebook.svg');
      node_66.setAttribute('alt', 'facebook-icon');
      node_65.appendChild(node_66);

      var node_67 = document.createElement('TD');
      node_64.appendChild(node_67);

      var node_68 = document.createTextNode((new String("K Coffee - Intramuros")));
      node_67.appendChild(node_68);

      var node_69 = document.createElement('TR');
      node_53.appendChild(node_69);

      var node_70 = document.createElement('TD');
      node_69.appendChild(node_70);

      var node_71 = document.createElement('IMG');
      node_71.setAttribute('class', 'contact-icon');
      node_71.setAttribute('id', 'instagram');
      node_71.setAttribute('src', 'images/instagram.svg');
      node_71.setAttribute('alt', 'instagram-icon');
      node_70.appendChild(node_71);

      var node_72 = document.createElement('TD');
      node_69.appendChild(node_72);

      var node_73 = document.createTextNode((new String("@kaycoffeeph")));
      node_72.appendChild(node_73);

      var node_74 = document.createElement('TR');
      node_53.appendChild(node_74);

      var node_75 = document.createElement('TD');
      node_74.appendChild(node_75);

      var node_76 = document.createElement('IMG');
      node_76.setAttribute('class', 'contact-icon');
      node_76.setAttribute('id', 'grab');
      node_76.setAttribute('src', 'images/grab.svg');
      node_76.setAttribute('alt', 'grab-icon');
      node_75.appendChild(node_76);

      var node_77 = document.createElement('TD');
      node_74.appendChild(node_77);

      var node_78 = document.createTextNode((new String("K Coffee - Intramuros")));
      node_77.appendChild(node_78);

      var node_79 = document.createElement('TR');
      node_53.appendChild(node_79);

      var node_80 = document.createElement('TD');
      node_79.appendChild(node_80);

      var node_81 = document.createElement('IMG');
      node_81.setAttribute('class', 'contact-icon');
      node_81.setAttribute('id', 'foodpanda');
      node_81.setAttribute('src', 'images/foodpanda-logo.svg');
      node_81.setAttribute('alt', 'foodpanda-icon');
      node_80.appendChild(node_81);

      var node_82 = document.createElement('TD');
      node_79.appendChild(node_82);

      var node_83 = document.createTextNode((new String("K Coffee - Intramuros")));
      node_82.appendChild(node_83);
    }
    menu() {
      //const currentChild = document.getElementById('contentSpaceHome');
      //mainContainer.removeChild(currentChild);
      //const currentChild = mainContainer.children;
      //mainContainer.removeChild(currentChild);
      const childNodes = mainContainer.childNodes;

      Array.from(childNodes).forEach(child => {
          mainContainer.removeChild(child);
      });
      var node_1 = document.createElement('DIV');
      node_1.setAttribute('id', 'contentSpaceMenu');
      mainContainer.appendChild(node_1);

      var node_2 = document.createElement('DIV');
      node_2.setAttribute('class', 'menu-header');
      node_2.setAttribute('id', 'drink-header');
      node_1.appendChild(node_2);

      var node_3 = document.createTextNode((new String("Drinks")));
      node_2.appendChild(node_3);

      var node_4 = document.createElement('DIV');
      node_4.setAttribute('class', 'menu-panel');
      node_4.setAttribute('id', 'drink-menu');
      node_1.appendChild(node_4);

      var node_5 = document.createElement('DIV');
      node_5.setAttribute('class', 'menu-item');
      node_4.appendChild(node_5);

      var node_6 = document.createElement('IMG');
      node_6.setAttribute('src', 'images/americano.png');
      node_6.setAttribute('alt', 'Americano');
      node_6.setAttribute('class', 'drink-item');
      node_5.appendChild(node_6);

      var node_7 = document.createElement('P');
      node_7.setAttribute('class', 'item-label');
      node_5.appendChild(node_7);

      var node_8 = document.createTextNode((new String("Americano")));
      node_7.appendChild(node_8);

      var node_9 = document.createElement('DIV');
      node_9.setAttribute('class', 'menu-item');
      node_4.appendChild(node_9);

      var node_10 = document.createElement('IMG');
      node_10.setAttribute('src', 'images/mocha.png');
      node_10.setAttribute('alt', 'Mocha');
      node_10.setAttribute('class', 'drink-item');
      node_9.appendChild(node_10);

      var node_11 = document.createElement('P');
      node_11.setAttribute('class', 'item-label');
      node_9.appendChild(node_11);

      var node_12 = document.createTextNode((new String("Mocha")));
      node_11.appendChild(node_12);

      var node_13 = document.createElement('DIV');
      node_13.setAttribute('class', 'menu-item');
      node_4.appendChild(node_13);

      var node_14 = document.createElement('IMG');
      node_14.setAttribute('src', 'images/latte.png');
      node_14.setAttribute('alt', 'Latte');
      node_14.setAttribute('class', 'drink-item');
      node_13.appendChild(node_14);

      var node_15 = document.createElement('P');
      node_15.setAttribute('class', 'item-label');
      node_13.appendChild(node_15);

      var node_16 = document.createTextNode((new String("Latte")));
      node_15.appendChild(node_16);

      var node_17 = document.createElement('DIV');
      node_17.setAttribute('class', 'menu-item');
      node_4.appendChild(node_17);

      var node_18 = document.createElement('IMG');
      node_18.setAttribute('src', 'images/machiatto.png');
      node_18.setAttribute('alt', 'Machiatto');
      node_18.setAttribute('class', 'drink-item');
      node_17.appendChild(node_18);

      var node_19 = document.createElement('P');
      node_19.setAttribute('class', 'item-label');
      node_17.appendChild(node_19);

      var node_20 = document.createTextNode((new String("Machiatto")));
      node_19.appendChild(node_20);

      var node_21 = document.createElement('DIV');
      node_21.setAttribute('class', 'menu-item');
      node_4.appendChild(node_21);

      var node_22 = document.createElement('IMG');
      node_22.setAttribute('src', 'images/frappe.png');
      node_22.setAttribute('alt', 'Frappe');
      node_22.setAttribute('class', 'drink-item');
      node_21.appendChild(node_22);

      var node_23 = document.createElement('P');
      node_23.setAttribute('class', 'item-label');
      node_21.appendChild(node_23);

      var node_24 = document.createTextNode((new String("Frappe")));
      node_23.appendChild(node_24);

      var node_25 = document.createElement('DIV');
      node_25.setAttribute('class', 'menu-header');
      node_25.setAttribute('id', 'food-header');
      node_1.appendChild(node_25);

      var node_26 = document.createTextNode((new String("Pasta")));
      node_25.appendChild(node_26);

      var node_27 = document.createElement('DIV');
      node_27.setAttribute('class', 'menu-panel');
      node_27.setAttribute('id', 'food-menu');
      node_1.appendChild(node_27);

      var node_28 = document.createElement('DIV');
      node_28.setAttribute('class', 'menu-item');
      node_27.appendChild(node_28);

      var node_29 = document.createElement('IMG');
      node_29.setAttribute('src', 'images/aglio olio.png');
      node_29.setAttribute('alt', 'Aglio Olio');
      node_29.setAttribute('class', 'food-item');
      node_28.appendChild(node_29);

      var node_30 = document.createElement('P');
      node_30.setAttribute('class', 'item-label');
      node_28.appendChild(node_30);

      var node_31 = document.createTextNode((new String("Aglio Olio")));
      node_30.appendChild(node_31);

      var node_32 = document.createElement('DIV');
      node_32.setAttribute('class', 'menu-item');
      node_27.appendChild(node_32);

      var node_33 = document.createElement('IMG');
      node_33.setAttribute('src', 'images/bolognese.png');
      node_33.setAttribute('alt', 'Bolognese');
      node_33.setAttribute('class', 'food-item');
      node_32.appendChild(node_33);

      var node_34 = document.createElement('P');
      node_34.setAttribute('class', 'item-label');
      node_32.appendChild(node_34);

      var node_35 = document.createTextNode((new String("Bolognese")));
      node_34.appendChild(node_35);

      var node_36 = document.createElement('DIV');
      node_36.setAttribute('class', 'menu-item');
      node_27.appendChild(node_36);

      var node_37 = document.createElement('IMG');
      node_37.setAttribute('src', 'images/carbonara.png');
      node_37.setAttribute('alt', 'Carbonara');
      node_37.setAttribute('class', 'food-item');
      node_36.appendChild(node_37);

      var node_38 = document.createElement('P');
      node_38.setAttribute('class', 'item-label');
      node_36.appendChild(node_38);

      var node_39 = document.createTextNode((new String("Carbonara")));
      node_38.appendChild(node_39);

      var node_40 = document.createElement('DIV');
      node_40.setAttribute('class', 'menu-item');
      node_27.appendChild(node_40);

      var node_41 = document.createElement('IMG');
      node_41.setAttribute('src', 'images/seafood.png');
      node_41.setAttribute('alt', 'Seafood');
      node_41.setAttribute('class', 'food-item');
      node_40.appendChild(node_41);

      var node_42 = document.createElement('P');
      node_42.setAttribute('class', 'item-label');
      node_40.appendChild(node_42);

      var node_43 = document.createTextNode((new String("Seafood")));
      node_42.appendChild(node_43);

      var node_44 = document.createElement('DIV');
      node_44.setAttribute('class', 'menu-item');
      node_27.appendChild(node_44);

      var node_45 = document.createElement('IMG');
      node_45.setAttribute('src', 'images/tomato.png');
      node_45.setAttribute('alt', 'Tomato');
      node_45.setAttribute('class', 'food-item');
      node_44.appendChild(node_45);

      var node_46 = document.createElement('P');
      node_46.setAttribute('class', 'item-label');
      node_44.appendChild(node_46);

      var node_47 = document.createTextNode((new String("Tomato")));
      node_46.appendChild(node_47);

      var node_48 = document.createElement('DIV');
      node_48.setAttribute('class', 'menu-header');
      node_48.setAttribute('id', 'dessert-header');
      node_1.appendChild(node_48);

      var node_49 = document.createTextNode((new String("Desserts")));
      node_48.appendChild(node_49);

      var node_50 = document.createElement('DIV');
      node_50.setAttribute('class', 'menu-panel');
      node_50.setAttribute('id', 'desssert-menu');
      node_1.appendChild(node_50);

      var node_51 = document.createElement('DIV');
      node_51.setAttribute('class', 'menu-item');
      node_50.appendChild(node_51);

      var node_52 = document.createElement('IMG');
      node_52.setAttribute('src', 'images/dount.png');
      node_52.setAttribute('alt', 'Donut');
      node_52.setAttribute('class', 'dessert-item');
      node_51.appendChild(node_52);

      var node_53 = document.createElement('P');
      node_53.setAttribute('class', 'item-label');
      node_51.appendChild(node_53);

      var node_54 = document.createTextNode((new String("Donut")));
      node_53.appendChild(node_54);

      var node_55 = document.createElement('DIV');
      node_55.setAttribute('class', 'menu-item');
      node_50.appendChild(node_55);

      var node_56 = document.createElement('IMG');
      node_56.setAttribute('src', 'images/gelatin.png');
      node_56.setAttribute('alt', 'Gelatin');
      node_56.setAttribute('class', 'dessert-item');
      node_55.appendChild(node_56);

      var node_57 = document.createElement('P');
      node_57.setAttribute('class', 'item-label');
      node_55.appendChild(node_57);

      var node_58 = document.createTextNode((new String("Gelatin")));
      node_57.appendChild(node_58);

      var node_59 = document.createElement('DIV');
      node_59.setAttribute('class', 'menu-item');
      node_50.appendChild(node_59);

      var node_60 = document.createElement('IMG');
      node_60.setAttribute('src', 'images/icecream.png');
      node_60.setAttribute('alt', 'Ice Cream');
      node_60.setAttribute('class', 'dessert-item');
      node_59.appendChild(node_60);

      var node_61 = document.createElement('P');
      node_61.setAttribute('class', 'item-label');
      node_59.appendChild(node_61);

      var node_62 = document.createTextNode((new String("Ice Cream")));
      node_61.appendChild(node_62);

      var node_63 = document.createElement('DIV');
      node_63.setAttribute('class', 'menu-item');
      node_50.appendChild(node_63);

      var node_64 = document.createElement('IMG');
      node_64.setAttribute('src', 'images/shortcake.png');
      node_64.setAttribute('alt', 'Shortcake');
      node_64.setAttribute('class', 'dessert-item');
      node_63.appendChild(node_64);

      var node_65 = document.createElement('P');
      node_65.setAttribute('class', 'item-label');
      node_63.appendChild(node_65);

      var node_66 = document.createTextNode((new String("Shortcake")));
      node_65.appendChild(node_66);

      var node_67 = document.createElement('DIV');
      node_67.setAttribute('class', 'menu-item');
      node_50.appendChild(node_67);

      var node_68 = document.createElement('IMG');
      node_68.setAttribute('src', 'images/waffles.png');
      node_68.setAttribute('alt', 'Waffles');
      node_68.setAttribute('class', 'dessert-item');
      node_67.appendChild(node_68);

      var node_69 = document.createElement('P');
      node_69.setAttribute('class', 'item-label');
      node_67.appendChild(node_69);

      var node_70 = document.createTextNode((new String("Waffles")));
      node_69.appendChild(node_70);
    }
    services(){
      const childNodes = mainContainer.childNodes;

      Array.from(childNodes).forEach(child => {
          mainContainer.removeChild(child);
      });
      
      var node_1 = document.createElement('DIV');
      node_1.setAttribute('id', 'contentSpaceServices');
      mainContainer.appendChild(node_1);
      
      var node_2 = document.createElement('DIV');
      node_2.setAttribute('class', 'services-panel');
      node_2.setAttribute('id', 'event-stall');
      node_1.appendChild(node_2);
      
      var node_3 = document.createElement('P');
      node_3.setAttribute('class', 'services-text-header');
      node_3.setAttribute('id', 'stall-header');
      node_3.textContent = "Event Stall";
      node_2.appendChild(node_3);
      
      var node_5 = document.createElement('P');
      node_5.setAttribute('class', 'services-text-info');
      node_5.setAttribute('id', 'stall-description');
      node_5.textContent = "Bring our most beloved coffee into your memorable moments!\nNever feel sleepy and continue to capture the moments with \nyour own eyes. To cater guest, participants and staffs alike!";
      node_2.appendChild(node_5);
      
      var node_6 = document.createElement('IMG');
      node_6.setAttribute('src', 'images/coffee-stand.png');
      node_6.setAttribute('alt', 'Coffee Stand Icon');
      node_6.setAttribute('id', 'coffee-stall');
      node_2.appendChild(node_6);
      
      var node_7 = document.createElement('DIV');
      node_7.setAttribute('class', 'services-panel');
      node_7.setAttribute('id', 'batch-order');
      node_1.appendChild(node_7);
      
      var node_8 = document.createElement('P');
      node_8.setAttribute('class', 'services-text-header');
      node_8.setAttribute('id', 'order-header');
      node_8.textContent = "Batch Order";
      node_7.appendChild(node_8);
      
      var node_10 = document.createElement('P');
      node_10.setAttribute('class', 'services-text-info');
      node_10.setAttribute('id', 'order-description');
      node_10.textContent="Coffee Party? Office Event? Party Beverate?\nWe got you! Just place your order 1 day before\nand we will be serving you coffees that will be \nenjoyed for both young and adult";
      node_7.appendChild(node_10);
      
      var node_12 = document.createElement('IMG');
      node_12.setAttribute('src', 'images/order.png');
      node_12.setAttribute('alt', 'Order List Icon');
      node_12.setAttribute('id', 'batch-order');
      node_7.appendChild(node_12);
      
      var node_13 = document.createElement('DIV');
      node_13.setAttribute('class', 'services-panel');
      node_13.setAttribute('id', 'barista-workshop');
      node_1.appendChild(node_13);
      
      var node_14 = document.createElement('P');
      node_14.setAttribute('class', 'services-text-header');
      node_14.setAttribute('id', 'workshop-header');
      node_14.textContent = "Barista Workshop";
      node_13.appendChild(node_14);
      
      var node_16 = document.createElement('P');
      node_16.setAttribute('class', 'services-text-info');
      node_16.setAttribute('id', 'workshop-description');
      node_16.textContent = "Your coffee, your move\n        Come and join us on a journey to learn the beauty of coffee.\n        From its aroma down to its taste!\n        "
      node_13.appendChild(node_16);
      
      var node_18 = document.createElement('IMG');
      node_18.setAttribute('src', 'images/barista.png');
      node_18.setAttribute('alt', 'Barista Icon');
      node_18.setAttribute('id', 'barista');
      node_16.appendChild(node_18);
    }
  };

 export default Navigation;
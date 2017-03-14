/**
 * Created by wfm on 2017/01/05.
 */
'use strict';

app.constant('JS_REQUIRES', {
  //*** Scripts
  scripts: {
    //*** Controllers
    'AccountCtrl':"js/controllers/AccountCtrl.js",
    'ChatDetailCtrl':"js/controllers/ChatDetailCtrl.js",
    'ChatsCtrl':"js/controllers/ChatsCtrl.js",
    'DashCtrl':"js/controllers/DashCtrl.js",
    'HotGameCtrl':"js/controllers/HotGameCtrl.js",
    'TestCtrl':"js/controllers/TestCtrl.js",
    //*** Services
    'ChatsService':"js/services/ChatsService.js",
    'HotGameService':"js/services/HotGameService.js",

    //*** Directive
    'Directive':"js/directives/Directive.js",
    'OniBarDirective': 'js/directives/OniBarDirective.js',
    'WechatDirectives': 'js/directives/WechatDirectives.js'
    //***  工具类

  },
  CssArg:{
    MainStyle:'css/MainStyle.css',
    ionicappcss:'css/ionic.app.css',
    ActionSheets:'lib/ionic/css/ionic_action_sheets.min.css',
    Animations:'lib/ionic/css/ionic_animations.min.css',
    Badges:'lib/ionic/css/ionic_badges.min.css',
    Bar:'lib/ionic/css/ionic_bar.min.css',
    ButtonBar:'lib/ionic/css/ionic_button_bar.min.css',
    Buttons:'lib/ionic/css/ionic_buttons.min.css',
    Checkbox:'lib/ionic/css/ionic_checkbox.min.css',
    ComplexItems:'lib/ionic/css/ionic_complex_items.min.css',
    Forms:'lib/ionic/css/ionic_forms.min.css',
    Grid:'lib/ionic/css/ionic_grid.min.css',
    Icon:'lib/ionic/css/ionic_icon.min.css',
    ItemButton:'lib/ionic/css/ionic_item_button.min.css',
    ItemIcons:'lib/ionic/css/ionic_item_icons.min.css',
    Items:'lib/ionic/css/ionic_items.min.css',
    ListsAndCard:'lib/ionic/css/ionic_lists_and_card.min.css',
    Loading:'lib/ionic/css/ionic_loading.min.css',
    Menu:'lib/ionic/css/ionic_menu.min.css',
    Modals:'lib/ionic/css/ionic_modals.min.css',
    Platform:'lib/ionic/css/ionic_platform.min.css',
    Popovers:'lib/ionic/css/ionic_popovers.min.css',
    Popups:'lib/ionic/css/ionic_popups.min.css',
    Progress:'lib/ionic/css/ionic_progress.min.css',
    Radio:'lib/ionic/css/ionic_radio.min.css',
    Range:'lib/ionic/css/ionic_range.min.css',
    Select:'lib/ionic/css/ionic_select.min.css',
    Slidebox:'lib/ionic/css/ionic_slidebox.min.css',
    Spinners:'lib/ionic/css/ionic_spinners.min.css',
    Swiper:'lib/ionic/css/ionic_swiper.min.css',
    Tabs:'lib/ionic/css/ionic_tabs.min.css',
    Toggle:'lib/ionic/css/ionic_toggle.min.css',
    Utility:'lib/ionic/css/ionic_utility.min.css'
  },
  ViewArgs: {
    //请注意这个文件是有加载顺序要求的。没按正确的顺序，将会导致错误。

    //初始化加载模块
    initialize:['Directive','MainStyle','ionicappcss'],

    //模块
    DashArgs: ['DashCtrl'],
    ChatsArgs: ['ChatsCtrl','ChatsService','WechatDirectives'],
    ChatDetailArgs: ['ChatDetailCtrl','ChatsService'],
    HotGameArgs:['HotGameCtrl','HotGameService'],
    AccountArgs: ['AccountCtrl'],

    TestArgs: ['TestCtrl']

  }
});

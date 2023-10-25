'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "a63498b1f9d2c3cbf2faba6aaeb20db0",
"index.html": "a22b2abaaed1caebf9a11d386163f2be",
"/": "a22b2abaaed1caebf9a11d386163f2be",
"main.dart.js": "399c56872f06f4b9f9afa14b3321d9fb",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"favicon.png": "64d20f02080e92840ee737763c21e054",
"icons/Icon-192.png": "00cf122848e00080f7f56b50fdb2c483",
"icons/Icon-maskable-192.png": "00cf122848e00080f7f56b50fdb2c483",
"icons/Icon-maskable-512.png": "bc3c8ed103891e0a827d9168d1020fe9",
"icons/Icon-512.png": "bc3c8ed103891e0a827d9168d1020fe9",
"manifest.json": "05bbffeceadb2f8222d6e3646c5c2342",
"assets/AssetManifest.json": "277b8797afe2c4826b5adede1a407ae9",
"assets/NOTICES": "563e001d8a2e6e153ba80b34e622225e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_sound_web/howler/howler.js": "2bba823e6b4d71ea019d81d384672823",
"assets/packages/flutter_sound_web/src/flutter_sound_recorder.js": "f7ac74c4e0fd5cd472d86c3fe93883fc",
"assets/packages/flutter_sound_web/src/flutter_sound_player.js": "6bf84579813fd481ec5e24e73927500d",
"assets/packages/flutter_sound_web/src/flutter_sound.js": "aecd83c80bf4faace0bcea4cd47ab307",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/mood_ic_family.png": "7a738d1150f9d2a45fae6d2aaf0fd801",
"assets/assets/images/mood_ic_idol.png": "ee2fdbfec05a47f7e00debb31679c9e3",
"assets/assets/images/ic_wechat.png": "5fb2781cd9b66821a8b2771ba987c57b",
"assets/assets/images/default_avatar.png": "8e4876be52d9daa5531c22e9ef771e8b",
"assets/assets/images/vip_pro_ic.png": "0571e07cc25d37aaf43149a74570c1a9",
"assets/assets/images/mine_fill_space.png": "e7fc811052458b1aa86b1862ff8ccfb5",
"assets/assets/images/logo_80.png": "be3bf1c516e34ce572d51ecf45e099e2",
"assets/assets/images/home_fill_space.png": "e430406ed852af8ae35feae64198a82d",
"assets/assets/images/mood_ic_sport.png": "88938abc692b09c2b201667c2d639d2a",
"assets/assets/images/practice_share.png": "e647c5835fedde63df0f5622dfda3c75",
"assets/assets/images/mine_mood_stat.png": "cec22a3ef5b45772d791732bc494ae19",
"assets/assets/images/mine_history_record.png": "25bb58c335ed6ad7d1b828f015903872",
"assets/assets/images/setting_orange.png": "0354f617927e8ef86a9833edeb4da9a9",
"assets/assets/images/vip_back.png": "ae26b209b8632f86ce33b4feefb16235",
"assets/assets/images/mood_ic_friend.png": "583c748ce284d59991d15ee56d1c4857",
"assets/assets/images/mood_ic_life.png": "62d25cc8616d3e66a6cb5b5d49f0bd74",
"assets/assets/images/mood_ic_study.png": "702fbebc453bad2fa156010ecffa0f23",
"assets/assets/images/discover_search_ic.png": "4a33bb355ddab76aba4dd3562b62f1e9",
"assets/assets/images/personal_info_edit_pic.png": "ca94cfdcf9800f3a3e87537969d848aa",
"assets/assets/images/ic_lable_test.png": "82356930d692df436c108fd8462ed379",
"assets/assets/images/mood_ic_music.png": "3a7b6892aa08b145a41249b06b43251e",
"assets/assets/images/mood_ic_partner.png": "24c7be431d511c5d2725c3ef6bf717f6",
"assets/assets/images/ic_close.png": "e4570a06ab40ae7a74808dc59bf573e9",
"assets/assets/images/practice_edit_ic.png": "5beb3d95b137c62b67f39db82d6a0f16",
"assets/assets/images/discover_all_assess.png": "5809aac3bbe80c1ac2577a63f8ba49e3",
"assets/assets/images/home_back_up.png": "34593b6ec981e1beb14b804490aeb3de",
"assets/assets/images/2.0x/mood_ic_family.png": "628a3b4e884ccae1f2bd23c72cb78d24",
"assets/assets/images/2.0x/mood_ic_idol.png": "93e07fc1587e914829b3c050156f09c8",
"assets/assets/images/2.0x/ic_wechat.png": "3b73cf18059550feef71f25c418678d1",
"assets/assets/images/2.0x/default_avatar.png": "e6ccb4981088ca6cbd9e4dfdbeb6a242",
"assets/assets/images/2.0x/vip_pro_ic.png": "e0eb48f4e91beb629062dbf77b3fe09d",
"assets/assets/images/2.0x/mine_fill_space.png": "b877fb6c7390f96b2d6146d8029ba0c7",
"assets/assets/images/2.0x/logo_80.png": "e578afdef34cda9cc49e164b3d5f5b43",
"assets/assets/images/2.0x/home_fill_space.png": "0764b998d6a85fb765c8fda0c6e22a38",
"assets/assets/images/2.0x/mood_ic_sport.png": "b72f1e6e09b5d94592830ee6f70d7a18",
"assets/assets/images/2.0x/practice_share.png": "0ebeb9e0c29159fa956ee26881209fb0",
"assets/assets/images/2.0x/mine_mood_stat.png": "f7d5ea5e4049dcc5e40d3ddb000b81f4",
"assets/assets/images/2.0x/mine_history_record.png": "5cba88320f586c596f55f977f80533d1",
"assets/assets/images/2.0x/setting_orange.png": "aeab301f797a4a4ecfc905b2fcc4846f",
"assets/assets/images/2.0x/vip_back.png": "acca28e2f0c7c7515ed0d442b730f6d6",
"assets/assets/images/2.0x/mood_ic_friend.png": "b905d1548033c7b77ab7bbdbaf32d472",
"assets/assets/images/2.0x/mood_ic_life.png": "c60401abacf009ca59e8f01fbc5939fd",
"assets/assets/images/2.0x/mood_ic_study.png": "0f53ec0af032293ec7357ef607c7b354",
"assets/assets/images/2.0x/discover_search_ic.png": "4922c0a807bf450760b8316c8d2ee28d",
"assets/assets/images/2.0x/personal_info_edit_pic.png": "47684b95c8c01900065531247220d7d6",
"assets/assets/images/2.0x/ic_lable_test.png": "61eca6aeba5c4cfed4eb3924cbbe4ac4",
"assets/assets/images/2.0x/mood_ic_music.png": "a93bb7285651a17d6881738821d8992c",
"assets/assets/images/2.0x/mood_ic_partner.png": "4b43f63401c11d6da3f100e1ebacfae4",
"assets/assets/images/2.0x/ic_close.png": "3d42396e4ca4cf5c28fec4708e7e91b9",
"assets/assets/images/2.0x/practice_edit_ic.png": "caa240e143c5820578dbc68a4408f65e",
"assets/assets/images/2.0x/discover_all_assess.png": "e24a9a89b7f66cc094287e6c1a278a8c",
"assets/assets/images/2.0x/home_back_up.png": "a7310dfeba7e7965391eba5364b5056e",
"assets/assets/images/2.0x/mood_ic_own.png": "eec42bce764038d6761160f2ddb9c439",
"assets/assets/images/2.0x/analysis_left_arrow.png": "fb4c006b37e590d7ed2abe69b0fb2d26",
"assets/assets/images/2.0x/finish_word_count.png": "cc802346b122e3ef586f2fe2d97819f8",
"assets/assets/images/2.0x/mood_ic_sleep.png": "cf48036573c43dc56db19ab4ba10db99",
"assets/assets/images/2.0x/mood_ic_game.png": "2ed96640ff9363bb66a3fda92cdf5dd2",
"assets/assets/images/2.0x/login_bottom_arrow.png": "dcc8d50045e437c60f18005e3b889b88",
"assets/assets/images/2.0x/practice_history.png": "8a3fe6b83d710132249af76db022b72a",
"assets/assets/images/2.0x/home_right_heart.png": "30aadef4d74f5017e41743ed1af56004",
"assets/assets/images/2.0x/mood_analysis_mark.png": "3555d83464daf53af67f63553bccdafd",
"assets/assets/images/2.0x/mood_ic_wealth.png": "202a4f3e3f3bd9ddc8d3e5fecc81eea1",
"assets/assets/images/2.0x/image_placeholder.png": "50c4072bfb034b13a9a9f096e14b3805",
"assets/assets/images/2.0x/search_icon.png": "8ca48b62c3fb6e63d65823fd7dc4d72d",
"assets/assets/images/2.0x/mood_ic_health.png": "8af553eebae9a71d117312c2bfc6817c",
"assets/assets/images/2.0x/edit_pen_grey.png": "9a1dc2f86044812f42709f7ed2b5d693",
"assets/assets/images/2.0x/mood_list_reason_back.png": "2583de0e3dad85f3142f7779d4c0fd93",
"assets/assets/images/2.0x/personal_info_arrow.png": "870496d9121171cd11f8b196f77d345b",
"assets/assets/images/2.0x/analysis_right_arrow.png": "e774d880f2072f10bd9dd937501b7070",
"assets/assets/images/2.0x/finish_normal_unselected.png": "2b3960559a8ed74077676ee49d438284",
"assets/assets/images/2.0x/ic_lable_chapter.png": "9fc9c520b31752e2e75dda89fa09777d",
"assets/assets/images/2.0x/finish_normal_selected.png": "6c895f859507793840dcf54aa1e05706",
"assets/assets/images/2.0x/mood_ic_travel.png": "d3ba2efd854c3acd265cc47055ab684d",
"assets/assets/images/2.0x/mood_ic_custom.png": "c43e0f3aac75866ffc9ab8a3dc7cd9c0",
"assets/assets/images/2.0x/mood_ic_work.png": "4466971110af6b7de699614d5d37b723",
"assets/assets/images/2.0x/tabBar_explore_no.png": "c8e4e532a0232c02369ed104d46863e3",
"assets/assets/images/2.0x/login_unselect.png": "02e1de1eb5511aa6a606e873c998ad08",
"assets/assets/images/2.0x/analysis_calendar.png": "70fc1983743ee2c37c8e439cfb49ddce",
"assets/assets/images/2.0x/finish_bad_selected.png": "7a682307bd7311b634a476e13ee18913",
"assets/assets/images/2.0x/search_hot_fire.png": "2c18e24984eb7f5810fb74304c98ede9",
"assets/assets/images/2.0x/practice_select.png": "24190065ef84a6bbd7711c1904cedd8e",
"assets/assets/images/2.0x/practice_lesson_lock.png": "706367d150b12bf92777a8631b16ec97",
"assets/assets/images/2.0x/practice_noSelect.png": "f51acd86179eeeef1376eab221bcb369",
"assets/assets/images/2.0x/search_clear.png": "91fcdb63d10bd1ba6bf9779ae6f6440b",
"assets/assets/images/2.0x/finish_time.png": "4139e006fc78a5673432b53020c16ce0",
"assets/assets/images/2.0x/mood_list_more.png": "53f4fc860fd9acd57224d5d928736838",
"assets/assets/images/2.0x/finish_good_unselected.png": "e90db19c69df1dedeeee59d0cbae4df3",
"assets/assets/images/2.0x/finish_good_selected.png": "b176d2e5f3a95d17dea6e3ea93203423",
"assets/assets/images/2.0x/discover_all_practice.png": "02c1ae52ef908773928a9b769dd30105",
"assets/assets/images/2.0x/search_history_time.png": "cd4c3e78f44bef5cf50757710152a371",
"assets/assets/images/2.0x/edit_pen_orange.png": "73e316334002e67b71cc8b2eaa305a78",
"assets/assets/images/2.0x/tabBar_mine_no.png": "f1d61bddd572996a7a7abc0ed3895253",
"assets/assets/images/2.0x/ic_back.png": "3acea0889653eed3939194c5103c7189",
"assets/assets/images/2.0x/finish_bad_unselected.png": "e8c81b874d2d55908fe909038eb9557c",
"assets/assets/images/2.0x/tabBar_mine_select.png": "8e4a48e8ff2c54632baf9ec4b7c32959",
"assets/assets/images/2.0x/ic_lable_series.png": "f3a6110fd92895e0358ea555b265c38c",
"assets/assets/images/2.0x/vip_header_icon.png": "793b0f42978de9fcb8dbcb43cb2e1bb0",
"assets/assets/images/2.0x/login_select.png": "58febfaaddc6b4bf57224de98651d854",
"assets/assets/images/2.0x/finish_header_ic.png": "d62f202a8124872832d9b02b181e5707",
"assets/assets/images/2.0x/mood_list_type_back.png": "990104f556f069fd6d86b74cc828e134",
"assets/assets/images/2.0x/my_setting.png": "a46397f390dad2307a48da0f18316fd5",
"assets/assets/images/2.0x/mood_choose_back.png": "0169a836bffca9429e81e9cb9dd29e5a",
"assets/assets/images/2.0x/mood_ic_society.png": "d1a00b17fe77e1aa145a5b892520d791",
"assets/assets/images/2.0x/tabBar_explore_select.png": "0b60467c40811fb7081a7a32df032aba",
"assets/assets/images/2.0x/practice_time_ic.png": "359025c89999593429173117cd19d6ec",
"assets/assets/images/2.0x/mine_pro_ic2.png": "e0eb48f4e91beb629062dbf77b3fe09d",
"assets/assets/images/2.0x/login_wechat.png": "629c040e9c377a0ab0d863c1abd3e73a",
"assets/assets/images/2.0x/practice_collected.png": "627238b4648d312d4f7e0cc53441efac",
"assets/assets/images/2.0x/tabBar_today_no.png": "e65ea2a518a04723dc34e722910354c6",
"assets/assets/images/2.0x/empty_page_seat.png": "0b632fb1039b14f8d52fbc508823aff6",
"assets/assets/images/2.0x/mood_ic_read.png": "7a8ca2cf9355b5212d8cd193135ff8b4",
"assets/assets/images/2.0x/mood_ic_pet.png": "c9fdf30ca6f39f545f4f78f27b6b25d2",
"assets/assets/images/2.0x/mood_ic_food.png": "8ea8fa547ae86b19eeec28c0c80733d7",
"assets/assets/images/2.0x/mine_pro_ic.png": "cc4ebd2469bb791394eff10f2b242abe",
"assets/assets/images/2.0x/mood_text_bg.png": "2933fdafa032670e14d41f0bcaff06f6",
"assets/assets/images/2.0x/home_back_down.png": "8105b6a38b6f9c2b53ef4e666a601466",
"assets/assets/images/2.0x/mood_ic_nature.png": "14fe9eaef7c7af39213b271cc6161d73",
"assets/assets/images/2.0x/home_back_all.png": "346945f495c7739ae4a428139e0333f3",
"assets/assets/images/2.0x/tabBar_today_select.png": "eb9071114efb4786c7635e45b95f11ac",
"assets/assets/images/2.0x/practice_pro_ic.png": "cd6d89058c58ffc547edaf4847dd5a53",
"assets/assets/images/mood_ic_own.png": "622931d7eb32e166a1ec570f2f232b9c",
"assets/assets/images/analysis_left_arrow.png": "369225a8f28b7492733b2316a2c135a2",
"assets/assets/images/finish_word_count.png": "fb8173c67e7ffa4d9ae8f43e8e00101e",
"assets/assets/images/mood_ic_sleep.png": "045862a31e0464daccdcc51581319e95",
"assets/assets/images/mood_ic_game.png": "b3558c5db674d9e8b99bab84f3f73d81",
"assets/assets/images/login_bottom_arrow.png": "c6cf45d8f2dfc79d149d4724b0d08296",
"assets/assets/images/practice_history.png": "f14ec3cbafd72d658c99fb0e3244ac2c",
"assets/assets/images/home_right_heart.png": "5a394f731251f2b77757c232100ee62e",
"assets/assets/images/mood_analysis_mark.png": "455fdd5329e73da804ee521e4e0330af",
"assets/assets/images/mood_ic_wealth.png": "4b3913d01a5f405cea1f24f44ee3a515",
"assets/assets/images/image_placeholder.png": "25f204e3b7260e92ec0f680450a81f0c",
"assets/assets/images/search_icon.png": "f84372c45b466bd069fe4d2413878d6c",
"assets/assets/images/mood_ic_health.png": "b342e05f5b1f7cdb7c8092c0f4ac4bae",
"assets/assets/images/edit_pen_grey.png": "ef2fd3512cb21b2bac9762314240d2f5",
"assets/assets/images/mood_list_reason_back.png": "f4f101d936e3b39fd7aac302ca065b53",
"assets/assets/images/personal_info_arrow.png": "9c87aee6f7cfbd59b72909f99a6affca",
"assets/assets/images/analysis_right_arrow.png": "c8f35fa7f392361794069f464dffff90",
"assets/assets/images/finish_normal_unselected.png": "10529bef5dcd3aad6f74a844e3289605",
"assets/assets/images/3.0x/mood_ic_family.png": "4f4915c96abb53ed362caae81a7e5dd9",
"assets/assets/images/3.0x/mood_ic_idol.png": "48545e86384345c752d86d5bfde29087",
"assets/assets/images/3.0x/ic_wechat.png": "059c815f43506922c01e73cf07f14135",
"assets/assets/images/3.0x/default_avatar.png": "27e193feb213702f1520515fee2765cd",
"assets/assets/images/3.0x/vip_pro_ic.png": "73d50e01076d844a99cdfed875d8ebb1",
"assets/assets/images/3.0x/mine_fill_space.png": "b675442c939137fb1aaaf7cd12b7bb5d",
"assets/assets/images/3.0x/logo_80.png": "7545458c4c565c08a2e3b68ff8b72e60",
"assets/assets/images/3.0x/home_fill_space.png": "1d0eb9cb534d6fe9605143060ed747fe",
"assets/assets/images/3.0x/mood_ic_sport.png": "61a20b7f057f0e552132c56d2589b092",
"assets/assets/images/3.0x/practice_share.png": "145a4341c1736aee0e1707ccc29066b7",
"assets/assets/images/3.0x/mine_mood_stat.png": "b0585a244ee583db5d48fcced5b2b46c",
"assets/assets/images/3.0x/mine_history_record.png": "d0063d589de06b3cd6b658da712416ac",
"assets/assets/images/3.0x/setting_orange.png": "27ad244e2d684dad8509a16dccff0de6",
"assets/assets/images/3.0x/vip_back.png": "3f30fa22da3a9cf36f4b4df4f96e1a41",
"assets/assets/images/3.0x/mood_ic_friend.png": "e57c7834373f92f8752c2ca06dfd1f57",
"assets/assets/images/3.0x/mood_ic_life.png": "ca56c03abe9e692629ab6a1a7c7242c1",
"assets/assets/images/3.0x/mood_ic_study.png": "cf3f39fdd030b5fef068841386efec60",
"assets/assets/images/3.0x/discover_search_ic.png": "a85342573137d7b23f6313b047c9c45f",
"assets/assets/images/3.0x/personal_info_edit_pic.png": "8790e482530bfa38712f3285c57acc75",
"assets/assets/images/3.0x/ic_lable_test.png": "17f3279b0c944221594186575d589e9e",
"assets/assets/images/3.0x/mood_ic_music.png": "11330293fd3c1a8ec3a18e1c4787e14d",
"assets/assets/images/3.0x/mood_ic_partner.png": "2b024c48b6880d3e319d7450ac38d8e8",
"assets/assets/images/3.0x/ic_close.png": "dfa8e4eb31203d585c00258afc445031",
"assets/assets/images/3.0x/practice_edit_ic.png": "176a5d72fc9f7938ba12234a45e21a4a",
"assets/assets/images/3.0x/discover_all_assess.png": "e1eef4dfdd184558dc2be4ef0df937f2",
"assets/assets/images/3.0x/home_back_up.png": "2bd9b5dd34a6de1c1478da03e91cc6dd",
"assets/assets/images/3.0x/mood_ic_own.png": "5b3149bd4e7d4f611d178942e2a66830",
"assets/assets/images/3.0x/analysis_left_arrow.png": "929d08773da06d6b220822ddd504c529",
"assets/assets/images/3.0x/finish_word_count.png": "a6b84dc83bd1244b5debe9ec0291b538",
"assets/assets/images/3.0x/mood_ic_sleep.png": "13a1df51803e77d3e45c0e52377530db",
"assets/assets/images/3.0x/mood_ic_game.png": "7414667850015aedfa2513b31581e3b1",
"assets/assets/images/3.0x/login_bottom_arrow.png": "37e95c8cfbe80ddd9d2d52fd9599ae2e",
"assets/assets/images/3.0x/practice_history.png": "5b93c1b35eef0cc4b1b3afa0d811747c",
"assets/assets/images/3.0x/home_right_heart.png": "10c42672502242f8774d06ea4dab92af",
"assets/assets/images/3.0x/mood_analysis_mark.png": "682a45b2dceeaf3330f9737efc0e83f7",
"assets/assets/images/3.0x/mood_ic_wealth.png": "40345c749336b25736959c3f969993ef",
"assets/assets/images/3.0x/image_placeholder.png": "a1dd31a8ec6946bb3f87ee1e01e326b6",
"assets/assets/images/3.0x/search_icon.png": "8fb533ef4e275b6f67785bb91338e688",
"assets/assets/images/3.0x/mood_ic_health.png": "352943a9aaac21cab57e9b6cbd556ac0",
"assets/assets/images/3.0x/edit_pen_grey.png": "aa702148a4e938f0de63adecee279ee7",
"assets/assets/images/3.0x/mood_list_reason_back.png": "8f3d5e7bf7c261814be07f0b8e6996b8",
"assets/assets/images/3.0x/personal_info_arrow.png": "95aecccc2d834ad51d06396410c533b0",
"assets/assets/images/3.0x/analysis_right_arrow.png": "36c07fb6ad04e99b8a3b8e96f39193cb",
"assets/assets/images/3.0x/finish_normal_unselected.png": "709a4035e55c0f4d6a29258e0c6c8117",
"assets/assets/images/3.0x/ic_lable_chapter.png": "41698689655d80715dc2dea0d3ea1070",
"assets/assets/images/3.0x/finish_normal_selected.png": "0ce448ee97d8aebc3797dce91875fa5f",
"assets/assets/images/3.0x/mood_ic_travel.png": "607341dff42489d84846d9680c4b673a",
"assets/assets/images/3.0x/mood_ic_custom.png": "5d5902e6a28e5d408b4d05d9094e2fea",
"assets/assets/images/3.0x/mood_ic_work.png": "7f64cd7838d03dab2ab299697f797fac",
"assets/assets/images/3.0x/tabBar_explore_no.png": "9a626bfd0e97159ee4a4189f2cd391b8",
"assets/assets/images/3.0x/login_unselect.png": "0afb6ac8bfc547c0342190fcf04ee576",
"assets/assets/images/3.0x/analysis_calendar.png": "9409ac6be3d58f027bf300046f42ea7d",
"assets/assets/images/3.0x/finish_bad_selected.png": "e1e98e44d66c960c2f3047e4f56fc59c",
"assets/assets/images/3.0x/search_hot_fire.png": "371f0b21e0428c07118758066eeb68f2",
"assets/assets/images/3.0x/practice_select.png": "87ddde0d3526dca6d99544e3225db154",
"assets/assets/images/3.0x/practice_lesson_lock.png": "089cb054832f6c8f91ab895071b52c6e",
"assets/assets/images/3.0x/practice_noSelect.png": "c3bea35fb7debc80538b409a703b487c",
"assets/assets/images/3.0x/search_clear.png": "3f445bc842b32160bee6addfaaf6bf09",
"assets/assets/images/3.0x/finish_time.png": "36db288e08599b36a1cbc6e88cd10803",
"assets/assets/images/3.0x/mood_list_more.png": "08ddcddc0a905755f1fe37667e3fd34a",
"assets/assets/images/3.0x/finish_good_unselected.png": "192e4760838a9b65e6cfe8681a8e3d39",
"assets/assets/images/3.0x/finish_good_selected.png": "fc730eb64dbaf59399929e9ca7a96ab3",
"assets/assets/images/3.0x/discover_all_practice.png": "8a728441d8f9358f480bd88f5481c39c",
"assets/assets/images/3.0x/search_history_time.png": "e168dff70ecfefabb49f397569b08a05",
"assets/assets/images/3.0x/edit_pen_orange.png": "0d3295d5ac5a2933907914bdec62d93b",
"assets/assets/images/3.0x/tabBar_mine_no.png": "d5115cf543318d1f9175e480dd0fadb7",
"assets/assets/images/3.0x/ic_back.png": "2776969f2e1d495486c647f97d348cd9",
"assets/assets/images/3.0x/finish_bad_unselected.png": "e8db3d52188514dece2ed44ca968030a",
"assets/assets/images/3.0x/tabBar_mine_select.png": "db1df042ef3caf43926364cfca683939",
"assets/assets/images/3.0x/ic_lable_series.png": "4848620021940c8d84418cad232fbbb9",
"assets/assets/images/3.0x/vip_header_icon.png": "c052efe289f2d075fddaf152ff304b02",
"assets/assets/images/3.0x/login_select.png": "9f1be58bb4888b6ac6e112fbd9e3f164",
"assets/assets/images/3.0x/finish_header_ic.png": "448d6cf5131aff5678c7b300c3652466",
"assets/assets/images/3.0x/mood_list_type_back.png": "80097ef9207d86661cb4e84bd4563e73",
"assets/assets/images/3.0x/my_setting.png": "42124fe955d3b13bb04215eeddfb97ce",
"assets/assets/images/3.0x/mood_choose_back.png": "72f802343213f95783c63f4cad313024",
"assets/assets/images/3.0x/mood_ic_society.png": "24d85d684d26aa867ed86e9079d81062",
"assets/assets/images/3.0x/tabBar_explore_select.png": "83cb31c66caf4a5e9a9087cb7cb83ce3",
"assets/assets/images/3.0x/practice_time_ic.png": "1885f0072b581ee8e2590ed1426147bf",
"assets/assets/images/3.0x/mine_pro_ic2.png": "73d50e01076d844a99cdfed875d8ebb1",
"assets/assets/images/3.0x/login_wechat.png": "24d5b71785250316aa849dd3141deff7",
"assets/assets/images/3.0x/practice_collected.png": "906e7304d715d8e5dd93a517f068d015",
"assets/assets/images/3.0x/tabBar_today_no.png": "9ca22c2128067a398903f1ff6febb295",
"assets/assets/images/3.0x/empty_page_seat.png": "8dcf3f895f8b9965a8bc5773571f1a2b",
"assets/assets/images/3.0x/mood_ic_read.png": "06f4458972f9d2b8da6f5f17ed8f27d5",
"assets/assets/images/3.0x/mood_ic_pet.png": "eb67de89496b53dc7e292ae73597a8d7",
"assets/assets/images/3.0x/mood_ic_food.png": "eb8c22010307ce94320edb70b61a3901",
"assets/assets/images/3.0x/mine_pro_ic.png": "769687b0cf8dfb57086a3f86bc05fd80",
"assets/assets/images/3.0x/mood_text_bg.png": "28522f391abe5a16278ad2d839144497",
"assets/assets/images/3.0x/home_back_down.png": "05a856b35e3c588272382161f8a09e58",
"assets/assets/images/3.0x/mood_ic_nature.png": "1b3c30917d28badff66b90950c982370",
"assets/assets/images/3.0x/home_back_all.png": "a70323b19220d7ee61f167012bc8c068",
"assets/assets/images/3.0x/tabBar_today_select.png": "4b68ae095c5ea5d0c4f1c25ff1f4e8f6",
"assets/assets/images/3.0x/practice_pro_ic.png": "51dd02b9802e5059a481838919197ce4",
"assets/assets/images/ic_lable_chapter.png": "a3cf281ced5228905bba851ced70b82d",
"assets/assets/images/finish_normal_selected.png": "61cb09d82ff4e85ac5af45d8518bc46c",
"assets/assets/images/mood_ic_travel.png": "ad8c2d85df34b8c586ff1a79bf1de6a3",
"assets/assets/images/mood_ic_custom.png": "3c6859a56995be59b842a62621766880",
"assets/assets/images/mood_ic_work.png": "ead169ea1e00443f3307ef77e4e0ef80",
"assets/assets/images/tabBar_explore_no.png": "7de958efd311386bacd0e73df422695a",
"assets/assets/images/login_unselect.png": "e656f33743e4245a5ebf4fa6ffdb8e64",
"assets/assets/images/analysis_calendar.png": "7f656a2e69cff1b8f5a4da2855ded6d5",
"assets/assets/images/finish_bad_selected.png": "01d6e8c7db5ebc7bbedd546c9e4bfd56",
"assets/assets/images/search_hot_fire.png": "7a878225ae609858f4b81b17408d78c9",
"assets/assets/images/practice_select.png": "0fcaafdc91b52a0b7075b961e4e82103",
"assets/assets/images/practice_lesson_lock.png": "2d516e763cff220ba6af84f4a45519b9",
"assets/assets/images/practice_noSelect.png": "879be9ca95cee2ee2be660e3e5074fd8",
"assets/assets/images/search_clear.png": "4ac7da806c2201ecdda45d2d072901af",
"assets/assets/images/finish_time.png": "c504836b4dcb7b40b2225d73df55a979",
"assets/assets/images/mood_list_more.png": "0b5205ae75e6615d7e32f9a07f41c8af",
"assets/assets/images/finish_good_unselected.png": "333cbd15d77e43edea5dfe6b9a8c192b",
"assets/assets/images/finish_good_selected.png": "2e7341f4094a34c41d936228e7af7acb",
"assets/assets/images/discover_all_practice.png": "2c3ac591cd43015d6ad836c7248e565b",
"assets/assets/images/search_history_time.png": "6a5e199793f4111f9ab2e682f652f03c",
"assets/assets/images/edit_pen_orange.png": "97f55cffced416f581b8f30b9ec92daf",
"assets/assets/images/tabBar_mine_no.png": "c58488300dbf846227bd5e5371905b13",
"assets/assets/images/ic_back.png": "e9797b90962eb9d8420a96e864a295a9",
"assets/assets/images/finish_bad_unselected.png": "191e97fcaf9d2bdbed9a7c7f5a663c33",
"assets/assets/images/tabBar_mine_select.png": "c931ab46543f8f2940ca10354ba8802a",
"assets/assets/images/ic_lable_series.png": "944ca909fa4be7109df87674a9405633",
"assets/assets/images/vip_header_icon.png": "a1511bc151fdfb3c2d8db8c1c2c59eda",
"assets/assets/images/login_select.png": "45a524541c22214524e9bab84642d20a",
"assets/assets/images/finish_header_ic.png": "125871cd88caf6983a810de9e92da916",
"assets/assets/images/mood_list_type_back.png": "f5a80279a4c607f60525ea1fac7de1ee",
"assets/assets/images/my_setting.png": "3a8cdcf24fc607259b7001e808eca433",
"assets/assets/images/mood_choose_back.png": "05eddd03c91af8aab0dc3a66dd2424e1",
"assets/assets/images/mood_ic_society.png": "74a6f93d8af655174c9a05f7f3b1444a",
"assets/assets/images/tabBar_explore_select.png": "d644227ce4616185d735249e62493dc2",
"assets/assets/images/practice_time_ic.png": "0382fb7a8d6aca48b78519c60edffa6b",
"assets/assets/images/mine_pro_ic2.png": "0571e07cc25d37aaf43149a74570c1a9",
"assets/assets/images/login_wechat.png": "d0e68c56f5efd139a7bf259b4a8a6975",
"assets/assets/images/practice_collected.png": "4d144d056cffb97a003d11d4205c7b25",
"assets/assets/images/tabBar_today_no.png": "1223f599f01130c7750a9eb6b7f670c1",
"assets/assets/images/empty_page_seat.png": "4e4a9ca40211c83f5726a738bc3bd3eb",
"assets/assets/images/mood_ic_read.png": "ecf8e6004cd9d2e95c60829ee4b157cb",
"assets/assets/images/mood_ic_pet.png": "42533d65b075a45e26c3dfd1096bb65a",
"assets/assets/images/mood_ic_food.png": "9e0fa52f8fcf8cf4bb8539faa728230e",
"assets/assets/images/mine_pro_ic.png": "febd518aced3ac79b9ce9b1ccb1a51f7",
"assets/assets/images/mood_text_bg.png": "8aa877b0d46c4ef5d7454d5fb5930f78",
"assets/assets/images/home_back_down.png": "d829b36ef9fac35bb3f13461e80fcc8e",
"assets/assets/images/mood_ic_nature.png": "e02f0d01aa64546c17b61c73f006e4a6",
"assets/assets/images/home_back_all.png": "c5f2ce4f4690897de71b356d6e8e5a0f",
"assets/assets/images/tabBar_today_select.png": "3c4a6e01152c2f89e9b016390a1c7b3a",
"assets/assets/images/practice_pro_ic.png": "bbcd97275233d6961705d67789b52f47",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

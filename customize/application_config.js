/*
 * You can override the configurable values from this file.
 * The recommended method is to make a copy of this file (/customize.dist/application_config.js)
   in a 'customize' directory (/customize/application_config.js).
 * If you want to check all the configurable values, you can open the internal configuration file
   but you should not change it directly (/common/application_config_internal.js)
*/
define(['/common/application_config_internal.js'], function (AppConfig) {
    config = AppConfig;
    config.displayCreationScreen = true;
    config.disableAnonymousStore = true;
    config.surveyURL = "https://survey.cryptpad.fr/index.php/672782?lang=de";
    config.availablePadTypes = ['drive', 'teams', 'pad', 'sheet', 'code', 'slide', 'poll', 'kanban', 'whiteboard','oodoc', 'ooslide', 'file', 'todo', 'contacts'];
    config.loginSalt = '#jKCRbdt~-MYW2(1M+)s%1gP|F|N+$^z$P|9e1x5KH<@$ -Xq/>uY{M_d+i5A;f!';
    return AppConfig;
});

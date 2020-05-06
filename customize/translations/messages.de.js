/*
 * You can override the translation text using this file.
 * The recommended method is to make a copy of this file (/customize.dist/translations/messages.{LANG}.js)
   in a 'customize' directory (/customize/translations/messages.{LANG}.js).
 * If you want to check all the existing translation keys, you can open the internal language file
   but you should not change it directly (/common/translations/messages.{LANG}.js)
*/
define(['/common/translations/messages.de.js'], function (Messages) {
    // Replace the existing keys in your copied file here:
    // Messages.button_newpad = "New Rich Text Document";
    out = Messages;
    out.type.code = 'Pad (md/Code)';
    out.button_newcode = 'Neues Pad (md/Code)';
    out.themeButtonTitle = "Wähle das Farbschema für Pad(md/Code)- und Folieneditor";
    out.settings_cat_code = "Pad (md/Code)";
    out.settings_codeIndentation = 'Einrückung für den Pad(md/Code)-Editor (Leerzeichen)';
    out.imprint = 'Impressum';
    out.main_catch_phrase = '"Make it so!" - Jean Luc Picard';
    delete out.faq.other;
    delete out.faq.usability.feature;
    
    out.ooslide = 'Präsentation β';
    out.type.ooslide = 'Präsentation β';
    out.oodoc = 'Dokumente β';
    out.type.oodoc = 'Dokumente β';

    out.button_newooslide = "Neue Präsentation β";
    out.button_newoodoc = "Neues Dokument β";

    return Messages;
});


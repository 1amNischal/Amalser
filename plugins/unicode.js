/*
Queen Amdi Bot - A whatsapp user bot.
Copyright (C) 2021 Black Amda

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
A.N.Tech any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

const Amdi = require('../events');
const {MessageType} = require('@adiwajshing/baileys');

// Config Checker
const cf = require('../config');

// Strings
const en = "This is a plugin that provides Unicode text from Queen Amdi WA bot. (Unicode Character Pack V2)"
const si = "මෙය Queen Amdi WA bot වෙතින් යුනිකෝඩ් අක්ෂර පෙළ ලබා දෙන ප්ලගිනයකි. (Unicode Character Pack V2)"

if (cf.LANG === 'SI') {
    if (cf.WORKTYPE === 'private') {
    
            Amdi.applyCMD({pattern: 'upack', fromMe: true, desc: en}, (async (message, match) => {

                await message.sendMessage("_මෙය Queen Amdi WA bot වෙතින් යුනිකෝඩ් අක්ෂර පෙළ ලබා දෙන ප්ලගිනයකි._\n\n⚙️විධානය: *.u1*\n📝විස්තරය: *හෙලිකොප්ටරයකින් ගොඩ බැස ඔබේ ආදරය හෙළි කරන්නේ කෙසේද?*\n\n⚙️විධානය: *.u2*\n📝විස්තරය: *යමෙකුට හදවතක් යවන්න, ඔබට ලැබී ඇති දේ බලමු.*\n\n⚙️විධානය: *.u3*\n📝විස්තරය: *යුද්ධ ටැංකියක් යැවීම ගැන කුමක් කිව හැකිද?*\n\n⚙️විධානය: *.u4*\n📝විස්තරය: *Moon heart emoji*\n\n⚙️විධානය: *.u5*\n📝විස්තරය: *අකමැති බව පෙන්වීමට*\n\n⚙️විධානය: *.u6*\n📝විස්තරය: *සතුටු කිරීමට බළලෙකු යැවීම ගැන කුමක් කිව හැකිද?*\n⚙️විධානය: *.u7*\n📝විස්තරය: *උපන් දින සුබ පැතුම්*\n\n⚙️විධානය: *.u8*\n📝විස්තරය: *පොඩි වෙඩිල්ලක් ගැන කොහොමද?*\n\n⚙️විධානය: *.u9*\n📝විස්තරය: *මම ඔයාට ආදරෙයි කියලා කියන්න වෙනස් ක්‍රමයක්*\n\nIntroduced by *@BlackAmda*\nVersion: *1.0*");

            }));

            Amdi.applyCMD({pattern: 'u1', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

                await message.sendMessage(" ▬▬▬.◙.▬▬▬\n ═▂▄▄▓▄▄▂\n◢◤ █▀▀████▄▄▄▄◢◤\n█▄▂█ █▄███▀▀▀▀▀▀▀╬\n◥█████◤\n══╩══╩═\n ╬═╬\n ╬═╬\n ╬═╬\n ╬═╬\n ╬═╬\n ╬═╬ ☻/\n ╬═╬/▌\n ╬═╬/");

            }));

            Amdi.applyCMD({pattern: 'u2', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

                await message.sendMessage("(っ◔◡◔っ) ❤");

            }));

            Amdi.applyCMD({pattern: 'u3', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

                await message.sendMessage("  ░░░░░░███████ ]▄▄▄▄▄▄▄▄          \n▂▄▅█████████▅▄▃▂   \nIl███████████████████].   ◥⊙▲⊙▲⊙▲⊙▲⊙▲⊙▲⊙◤..\n");
    
            }));

            Amdi.applyCMD({pattern: 'u4', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

                await message.sendMessage("🌑🌑🌑🌑🌑🌑🌑🌑🌑🌑🌑\n🌑🌑🌒🌘🌑🌑🌑🌒🌘🌑🌑\n🌑🌔🌕🌕🌕🌑🌕🌕🌕🌖🌑\n🌑🌕🌕🌕🌕🌕🌕🌕🌕🌕🌑\n🌑🌔🌕🌕🌕🌕🌕🌕🌕🌖🌑\n🌑🌒🌕🌕🌕🌕🌕🌕🌕🌘🌑\n🌑🌑🌒🌕🌕🌕🌕🌕🌘🌑🌑\n🌑🌑🌒🌕🌕🌕🌕🌕🌘🌑🌑\n🌑🌑🌑🌒🌕🌕🌕🌘🌑🌑🌑\n🌑🌑🌑🌑🌒🌕🌘🌑🌑🌑🌑\n🌑🌑🌑🌑🌑🌑🌑🌑🌑🌑🌑\n🌑🌑🌑🌑🌑🌑🌑🌑🌑🌑🌑\n🌑🌑🌒🌘🌑🌑🌑🌒🌘🌑🌑\n🌑🌒❤️❤️🌘🌑🌒❤️❤️🌘🌑\n🌑🌔❤️❤️🌕🌑❤️❤️❤️🌖🌑\n🌑❤️❤️❤️❤️❤️❤️❤️❤️❤️🌑\n🌑🌔❤️❤️❤️❤️❤️❤️❤️🌖🌑\n🌑🌒❤️❤️❤️❤️❤️❤️❤️🌘🌑\n🌑🌑🌒❤️❤️❤️❤️❤️🌘🌑🌑\n🌑🌑🌑🌒❤️❤️❤️🌘🌑🌑🌑\n🌑🌑🌑🌑🌒🌕🌘🌑🌑🌑🌑\n🌑🌑🌑🌑🌑🌑🌑🌑🌑🌑🌑");

            }));

            Amdi.applyCMD({pattern: 'u5', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

                await message.sendMessage("███████▄▄███████████▄\n▓▓▓▓▓▓█░░░░░░░░░░░░░░█\n▓▓▓▓▓▓█░░░░░░░░░░░░░░█\n▓▓▓▓▓▓█░░░░░░░░░░░░░░█\n▓▓▓▓▓▓█░░░░░░░░░░░░░░█\n▓▓▓▓▓▓█░░░░░░░░░░░░░░█\n▓▓▓▓▓▓███░░░░░░░░░░░░█\n██████▀░░█░░░░██████▀\n░░░░░░░░░█░░░░█\n░░░░░░░░░░█░░░█\n░░░░░░░░░░░█░░█\n░░░░░░░░░░░█░░█\n░░░░░░░░░░░░▀▀");

            }));

            Amdi.applyCMD({pattern: 'u6', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

                await message.sendMessage("──────▄▀▄─────▄▀▄\n─────▄█░░▀▀▀▀▀░░█▄\n─▄▄──█░░░░░░░░░░░█──▄▄\n█▄▄█─█░░▀░░┬░░▀░░█─█▄▄█");

            }));

            Amdi.applyCMD({pattern: 'u7', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

                await message.sendMessage("\n♪ღ♪*•.¸¸.•*¨¨*•.♪ღ♪*•.¸¸.•*¨¨*•.♪ღ♪\n░H░A░P░P░Y░♪░B░I░R░T░H░D░A░Y░\n♪ღ♪*•.¸¸.•*¨¨*•.♪ღ♪*•.¸¸.•*¨¨*•.♪ღ♪");

            }));

            Amdi.applyCMD({pattern: 'u8', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

                await message.sendMessage("\n_/﹋\_\n(҂`_´)\n<,︻╦╤─ ҉ - -\n_/﹋\_");

            }));

            Amdi.applyCMD({pattern: 'u9', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

                await message.sendMessage("╔══╗╔╗ ♡ ♡ ♡\n╚╗╔╝║║╔═╦╦╦╔╗\n╔╝╚╗║╚╣║║║║╔╣\n╚══╝╚═╩═╩═╩═╝\nஜ۞ஜ YOU ஜ۞ஜ");

            }));

        }
        else if (cf.WORKTYPE === 'public') {
    
            Amdi.applyCMD({pattern: 'upack', fromMe: false, desc: en}, (async (message, match) => {

                await message.sendMessage("_මෙය Queen Amdi WA bot වෙතින් යුනිකෝඩ් අක්ෂර පෙළ ලබා දෙන ප්ලගිනයකි._\n\n⚙️විධානය: *.u1*\n📝විස්තරය: *හෙලිකොප්ටරයකින් ගොඩ බැස ඔබේ ආදරය හෙළි කරන්නේ කෙසේද?*\n\n⚙️විධානය: *.u2*\n📝විස්තරය: *යමෙකුට හදවතක් යවන්න, ඔබට ලැබී ඇති දේ බලමු.*\n\n⚙️විධානය: *.u3*\n📝විස්තරය: *යුද්ධ ටැංකියක් යැවීම ගැන කුමක් කිව හැකිද?*\n\n⚙️විධානය: *.u4*\n📝විස්තරය: *Moon heart emoji*\n\n⚙️විධානය: *.u5*\n📝විස්තරය: *අකමැති බව පෙන්වීමට*\n\n⚙️විධානය: *.u6*\n📝විස්තරය: *සතුටු කිරීමට බළලෙකු යැවීම ගැන කුමක් කිව හැකිද?*\n⚙️විධානය: *.u7*\n📝විස්තරය: *උපන් දින සුබ පැතුම්*\n\n⚙️විධානය: *.u8*\n📝විස්තරය: *පොඩි වෙඩිල්ලක් ගැන කොහොමද?*\n\n⚙️විධානය: *.u9*\n📝විස්තරය: *මම ඔයාට ආදරෙයි කියලා කියන්න වෙනස් ක්‍රමයක්*\n\nIntroduced by *@BlackAmda*\nVersion: *1.0*");

            }));

            Amdi.applyCMD({pattern: 'u1', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

                await message.sendMessage(" ▬▬▬.◙.▬▬▬\n ═▂▄▄▓▄▄▂\n◢◤ █▀▀████▄▄▄▄◢◤\n█▄▂█ █▄███▀▀▀▀▀▀▀╬\n◥█████◤\n══╩══╩═\n ╬═╬\n ╬═╬\n ╬═╬\n ╬═╬\n ╬═╬\n ╬═╬ ☻/\n ╬═╬/▌\n ╬═╬/");

            }));

            Amdi.applyCMD({pattern: 'u2', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

                await message.sendMessage("(っ◔◡◔っ) ❤");

            }));

            Amdi.applyCMD({pattern: 'u3', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

                await message.sendMessage("  ░░░░░░███████ ]▄▄▄▄▄▄▄▄          \n▂▄▅█████████▅▄▃▂   \nIl███████████████████].   ◥⊙▲⊙▲⊙▲⊙▲⊙▲⊙▲⊙◤..\n");
    
            }));

            Amdi.applyCMD({pattern: 'u4', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

                await message.sendMessage("🌑🌑🌑🌑🌑🌑🌑🌑🌑🌑🌑\n🌑🌑🌒🌘🌑🌑🌑🌒🌘🌑🌑\n🌑🌔🌕🌕🌕🌑🌕🌕🌕🌖🌑\n🌑🌕🌕🌕🌕🌕🌕🌕🌕🌕🌑\n🌑🌔🌕🌕🌕🌕🌕🌕🌕🌖🌑\n🌑🌒🌕🌕🌕🌕🌕🌕🌕🌘🌑\n🌑🌑🌒🌕🌕🌕🌕🌕🌘🌑🌑\n🌑🌑🌒🌕🌕🌕🌕🌕🌘🌑🌑\n🌑🌑🌑🌒🌕🌕🌕🌘🌑🌑🌑\n🌑🌑🌑🌑🌒🌕🌘🌑🌑🌑🌑\n🌑🌑🌑🌑🌑🌑🌑🌑🌑🌑🌑\n🌑🌑🌑🌑🌑🌑🌑🌑🌑🌑🌑\n🌑🌑🌒🌘🌑🌑🌑🌒🌘🌑🌑\n🌑🌒❤️❤️🌘🌑🌒❤️❤️🌘🌑\n🌑🌔❤️❤️🌕🌑❤️❤️❤️🌖🌑\n🌑❤️❤️❤️❤️❤️❤️❤️❤️❤️🌑\n🌑🌔❤️❤️❤️❤️❤️❤️❤️🌖🌑\n🌑🌒❤️❤️❤️❤️❤️❤️❤️🌘🌑\n🌑🌑🌒❤️❤️❤️❤️❤️🌘🌑🌑\n🌑🌑🌑🌒❤️❤️❤️🌘🌑🌑🌑\n🌑🌑🌑🌑🌒🌕🌘🌑🌑🌑🌑\n🌑🌑🌑🌑🌑🌑🌑🌑🌑🌑🌑");

            }));

            Amdi.applyCMD({pattern: 'u5', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

                await message.sendMessage("███████▄▄███████████▄\n▓▓▓▓▓▓█░░░░░░░░░░░░░░█\n▓▓▓▓▓▓█░░░░░░░░░░░░░░█\n▓▓▓▓▓▓█░░░░░░░░░░░░░░█\n▓▓▓▓▓▓█░░░░░░░░░░░░░░█\n▓▓▓▓▓▓█░░░░░░░░░░░░░░█\n▓▓▓▓▓▓███░░░░░░░░░░░░█\n██████▀░░█░░░░██████▀\n░░░░░░░░░█░░░░█\n░░░░░░░░░░█░░░█\n░░░░░░░░░░░█░░█\n░░░░░░░░░░░█░░█\n░░░░░░░░░░░░▀▀");

            }));

            Amdi.applyCMD({pattern: 'u6', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

                await message.sendMessage("──────▄▀▄─────▄▀▄\n─────▄█░░▀▀▀▀▀░░█▄\n─▄▄──█░░░░░░░░░░░█──▄▄\n█▄▄█─█░░▀░░┬░░▀░░█─█▄▄█");

            }));

            Amdi.applyCMD({pattern: 'u7', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

                await message.sendMessage("\n♪ღ♪*•.¸¸.•*¨¨*•.♪ღ♪*•.¸¸.•*¨¨*•.♪ღ♪\n░H░A░P░P░Y░♪░B░I░R░T░H░D░A░Y░\n♪ღ♪*•.¸¸.•*¨¨*•.♪ღ♪*•.¸¸.•*¨¨*•.♪ღ♪");

            }));

            Amdi.applyCMD({pattern: 'u8', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

                await message.sendMessage("\n_/﹋\_\n(҂`_´)\n<,︻╦╤─ ҉ - -\n_/﹋\_");

            }));

            Amdi.applyCMD({pattern: 'u9', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

                await message.sendMessage("╔══╗╔╗ ♡ ♡ ♡\n╚╗╔╝║║╔═╦╦╦╔╗\n╔╝╚╗║╚╣║║║║╔╣\n╚══╝╚═╩═╩═╩═╝\nஜ۞ஜ YOU ஜ۞ஜ");

            }));

    }
}

else if (cf.LANG === 'EN') {
    if (cf.WORKTYPE === 'private') {
    
        Amdi.applyCMD({pattern: 'upack', fromMe: true, desc: en}, (async (message, match) => {

            await message.sendMessage("_This is a plugin that provides Unicode text from Queen Amdi WA bot._\n\n⚙️Command: *.u1*\n📝Description: *How do you get off a helicopter and express your love?*\n\n⚙️Command: *.u2*\n📝Description: *Send a heart to someone, let’s see what you’ve got.*\n\n⚙️Command: *.u3*\n📝Description: *What about sending a tank?*\n\n⚙️Command: *.u4*\n📝Description: *Moon heart emoji*\n\n⚙️Command: *.u5*\n📝Description: *To show dislike*\n\n⚙️Command: *.u6*\n📝Description: *What about sending a cat to please?*\n⚙️Command: *.u7*\n📝Description: *Happy Birthday*\n\n⚙️Command: *.u8*\n📝Description: *How about a little shot?*\n\n⚙️Command: *.u9*\n📝Description: *A different way to say I love you*\n\nIntroduced by *@BlackAmda*\nVersion: *2.0*");

        }));

        Amdi.applyCMD({pattern: 'u1', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

            await message.sendMessage(" ▬▬▬.◙.▬▬▬\n ═▂▄▄▓▄▄▂\n◢◤ █▀▀████▄▄▄▄◢◤\n█▄▂█ █▄███▀▀▀▀▀▀▀╬\n◥█████◤\n══╩══╩═\n ╬═╬\n ╬═╬\n ╬═╬\n ╬═╬\n ╬═╬\n ╬═╬ ☻/\n ╬═╬/▌\n ╬═╬/");

        }));

        Amdi.applyCMD({pattern: 'u2', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

            await message.sendMessage("(っ◔◡◔っ) ❤");

        }));

        Amdi.applyCMD({pattern: 'u3', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

            await message.sendMessage("  ░░░░░░███████ ]▄▄▄▄▄▄▄▄          \n▂▄▅█████████▅▄▃▂   \nIl███████████████████].   ◥⊙▲⊙▲⊙▲⊙▲⊙▲⊙▲⊙◤..\n");

        }));

        Amdi.applyCMD({pattern: 'u4', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

            await message.sendMessage("🌑🌑🌑🌑🌑🌑🌑🌑🌑🌑🌑\n🌑🌑🌒🌘🌑🌑🌑🌒🌘🌑🌑\n🌑🌔🌕🌕🌕🌑🌕🌕🌕🌖🌑\n🌑🌕🌕🌕🌕🌕🌕🌕🌕🌕🌑\n🌑🌔🌕🌕🌕🌕🌕🌕🌕🌖🌑\n🌑🌒🌕🌕🌕🌕🌕🌕🌕🌘🌑\n🌑🌑🌒🌕🌕🌕🌕🌕🌘🌑🌑\n🌑🌑🌒🌕🌕🌕🌕🌕🌘🌑🌑\n🌑🌑🌑🌒🌕🌕🌕🌘🌑🌑🌑\n🌑🌑🌑🌑🌒🌕🌘🌑🌑🌑🌑\n🌑🌑🌑🌑🌑🌑🌑🌑🌑🌑🌑\n🌑🌑🌑🌑🌑🌑🌑🌑🌑🌑🌑\n🌑🌑🌒🌘🌑🌑🌑🌒🌘🌑🌑\n🌑🌒❤️❤️🌘🌑🌒❤️❤️🌘🌑\n🌑🌔❤️❤️🌕🌑❤️❤️❤️🌖🌑\n🌑❤️❤️❤️❤️❤️❤️❤️❤️❤️🌑\n🌑🌔❤️❤️❤️❤️❤️❤️❤️🌖🌑\n🌑🌒❤️❤️❤️❤️❤️❤️❤️🌘🌑\n🌑🌑🌒❤️❤️❤️❤️❤️🌘🌑🌑\n🌑🌑🌑🌒❤️❤️❤️🌘🌑🌑🌑\n🌑🌑🌑🌑🌒🌕🌘🌑🌑🌑🌑\n🌑🌑🌑🌑🌑🌑🌑🌑🌑🌑🌑");

        }));

        Amdi.applyCMD({pattern: 'u5', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

            await message.sendMessage("███████▄▄███████████▄\n▓▓▓▓▓▓█░░░░░░░░░░░░░░█\n▓▓▓▓▓▓█░░░░░░░░░░░░░░█\n▓▓▓▓▓▓█░░░░░░░░░░░░░░█\n▓▓▓▓▓▓█░░░░░░░░░░░░░░█\n▓▓▓▓▓▓█░░░░░░░░░░░░░░█\n▓▓▓▓▓▓███░░░░░░░░░░░░█\n██████▀░░█░░░░██████▀\n░░░░░░░░░█░░░░█\n░░░░░░░░░░█░░░█\n░░░░░░░░░░░█░░█\n░░░░░░░░░░░█░░█\n░░░░░░░░░░░░▀▀");

        }));

        Amdi.applyCMD({pattern: 'u6', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

            await message.sendMessage("──────▄▀▄─────▄▀▄\n─────▄█░░▀▀▀▀▀░░█▄\n─▄▄──█░░░░░░░░░░░█──▄▄\n█▄▄█─█░░▀░░┬░░▀░░█─█▄▄█");

        }));

        Amdi.applyCMD({pattern: 'u7', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

            await message.sendMessage("\n♪ღ♪*•.¸¸.•*¨¨*•.♪ღ♪*•.¸¸.•*¨¨*•.♪ღ♪\n░H░A░P░P░Y░♪░B░I░R░T░H░D░A░Y░\n♪ღ♪*•.¸¸.•*¨¨*•.♪ღ♪*•.¸¸.•*¨¨*•.♪ღ♪");

        }));

        Amdi.applyCMD({pattern: 'u8', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

            await message.sendMessage("\n_/﹋\_\n(҂`_´)\n<,︻╦╤─ ҉ - -\n_/﹋\_");

        }));

        Amdi.applyCMD({pattern: 'u9', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

            await message.sendMessage("╔══╗╔╗ ♡ ♡ ♡\n╚╗╔╝║║╔═╦╦╦╔╗\n╔╝╚╗║╚╣║║║║╔╣\n╚══╝╚═╩═╩═╩═╝\nஜ۞ஜ YOU ஜ۞ஜ");

        }));

    }
    else if (cf.WORKTYPE === 'public') {

        Amdi.applyCMD({pattern: 'upack', fromMe: false, desc: en}, (async (message, match) => {

            await message.sendMessage("_This is a plugin that provides Unicode text from Queen Amdi WA bot._\n\n⚙️Command: *.u1*\n📝Description: *How do you get off a helicopter and express your love?*\n\n⚙️Command: *.u2*\n📝Description: *Send a heart to someone, let’s see what you’ve got.*\n\n⚙️Command: *.u3*\n📝Description: *What about sending a tank?*\n\n⚙️Command: *.u4*\n📝Description: *Moon heart emoji*\n\n⚙️Command: *.u5*\n📝Description: *To show dislike*\n\n⚙️Command: *.u6*\n📝Description: *What about sending a cat to please?*\n⚙️Command: *.u7*\n📝Description: *Happy Birthday*\n\n⚙️Command: *.u8*\n📝Description: *How about a little shot?*\n\n⚙️Command: *.u9*\n📝Description: *A different way to say I love you*\n\nIntroduced by *@BlackAmda*\nVersion: *2.0*");

        }));

        Amdi.applyCMD({pattern: 'u1', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

            await message.sendMessage(" ▬▬▬.◙.▬▬▬\n ═▂▄▄▓▄▄▂\n◢◤ █▀▀████▄▄▄▄◢◤\n█▄▂█ █▄███▀▀▀▀▀▀▀╬\n◥█████◤\n══╩══╩═\n ╬═╬\n ╬═╬\n ╬═╬\n ╬═╬\n ╬═╬\n ╬═╬ ☻/\n ╬═╬/▌\n ╬═╬/");

        }));

        Amdi.applyCMD({pattern: 'u2', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

            await message.sendMessage("(っ◔◡◔っ) ❤");

        }));

        Amdi.applyCMD({pattern: 'u3', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

            await message.sendMessage("  ░░░░░░███████ ]▄▄▄▄▄▄▄▄          \n▂▄▅█████████▅▄▃▂   \nIl███████████████████].   ◥⊙▲⊙▲⊙▲⊙▲⊙▲⊙▲⊙◤..\n");

        }));

        Amdi.applyCMD({pattern: 'u4', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

            await message.sendMessage("🌑🌑🌑🌑🌑🌑🌑🌑🌑🌑🌑\n🌑🌑🌒🌘🌑🌑🌑🌒🌘🌑🌑\n🌑🌔🌕🌕🌕🌑🌕🌕🌕🌖🌑\n🌑🌕🌕🌕🌕🌕🌕🌕🌕🌕🌑\n🌑🌔🌕🌕🌕🌕🌕🌕🌕🌖🌑\n🌑🌒🌕🌕🌕🌕🌕🌕🌕🌘🌑\n🌑🌑🌒🌕🌕🌕🌕🌕🌘🌑🌑\n🌑🌑🌒🌕🌕🌕🌕🌕🌘🌑🌑\n🌑🌑🌑🌒🌕🌕🌕🌘🌑🌑🌑\n🌑🌑🌑🌑🌒🌕🌘🌑🌑🌑🌑\n🌑🌑🌑🌑🌑🌑🌑🌑🌑🌑🌑\n🌑🌑🌑🌑🌑🌑🌑🌑🌑🌑🌑\n🌑🌑🌒🌘🌑🌑🌑🌒🌘🌑🌑\n🌑🌒❤️❤️🌘🌑🌒❤️❤️🌘🌑\n🌑🌔❤️❤️🌕🌑❤️❤️❤️🌖🌑\n🌑❤️❤️❤️❤️❤️❤️❤️❤️❤️🌑\n🌑🌔❤️❤️❤️❤️❤️❤️❤️🌖🌑\n🌑🌒❤️❤️❤️❤️❤️❤️❤️🌘🌑\n🌑🌑🌒❤️❤️❤️❤️❤️🌘🌑🌑\n🌑🌑🌑🌒❤️❤️❤️🌘🌑🌑🌑\n🌑🌑🌑🌑🌒🌕🌘🌑🌑🌑🌑\n🌑🌑🌑🌑🌑🌑🌑🌑🌑🌑🌑");

        }));

        Amdi.applyCMD({pattern: 'u5', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

            await message.sendMessage("███████▄▄███████████▄\n▓▓▓▓▓▓█░░░░░░░░░░░░░░█\n▓▓▓▓▓▓█░░░░░░░░░░░░░░█\n▓▓▓▓▓▓█░░░░░░░░░░░░░░█\n▓▓▓▓▓▓█░░░░░░░░░░░░░░█\n▓▓▓▓▓▓█░░░░░░░░░░░░░░█\n▓▓▓▓▓▓███░░░░░░░░░░░░█\n██████▀░░█░░░░██████▀\n░░░░░░░░░█░░░░█\n░░░░░░░░░░█░░░█\n░░░░░░░░░░░█░░█\n░░░░░░░░░░░█░░█\n░░░░░░░░░░░░▀▀");

        }));

        Amdi.applyCMD({pattern: 'u6', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

            await message.sendMessage("──────▄▀▄─────▄▀▄\n─────▄█░░▀▀▀▀▀░░█▄\n─▄▄──█░░░░░░░░░░░█──▄▄\n█▄▄█─█░░▀░░┬░░▀░░█─█▄▄█");

        }));

        Amdi.applyCMD({pattern: 'u7', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

            await message.sendMessage("\n♪ღ♪*•.¸¸.•*¨¨*•.♪ღ♪*•.¸¸.•*¨¨*•.♪ღ♪\n░H░A░P░P░Y░♪░B░I░R░T░H░D░A░Y░\n♪ღ♪*•.¸¸.•*¨¨*•.♪ღ♪*•.¸¸.•*¨¨*•.♪ღ♪");

        }));

        Amdi.applyCMD({pattern: 'u8', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

            await message.sendMessage("\n_/﹋\_\n(҂`_´)\n<,︻╦╤─ ҉ - -\n_/﹋\_");

        }));

        Amdi.applyCMD({pattern: 'u9', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

            await message.sendMessage("╔══╗╔╗ ♡ ♡ ♡\n╚╗╔╝║║╔═╦╦╦╔╗\n╔╝╚╗║╚╣║║║║╔╣\n╚══╝╚═╩═╩═╩═╝\nஜ۞ஜ YOU ஜ۞ஜ");

        }));

    }
}

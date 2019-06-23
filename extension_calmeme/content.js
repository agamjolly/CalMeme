var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            node.nodeValue = 
            node.nodeValue
            //cal cs (full-form) -- virgins
            .replace(/cal computer science graduates/gi, 'virgins')
            .replace(/cal computer science majors/gi, 'virgins')
            .replace(/cal computer science graduate/gi, 'virgin')
            .replace(/cal computer science major/gi, 'virgin')
            .replace(/cal computer science student/gi, 'virgin')
            .replace(/cal computer science students/gi, 'virgins')
            //uc berkeley cs (full-form) -- virgins
            .replace(/uc berkeley computer science graduates/gi, 'virgins')
            .replace(/uc berkeley computer science majors/gi, 'virgins')
            .replace(/uc berkeley computer science graduate/gi, 'virgin')
            .replace(/uc berkeley computer science major/gi, 'virgin')
            .replace(/uc berkeley computer science students/gi, 'virgins')
            .replace(/uc berkeley computer science student/gi, 'virgin')
            //university of california berkeley cs (full-form) -- virgins
            .replace(/university of california berkeley computer science graduates/gi, 'virgins')
            .replace(/university of california berkeley computer science majors/gi, 'virgins')
            .replace(/university of california berkeley computer science graduate/gi, 'virgin')
            .replace(/university of california berkeley computer science major/gi, 'virgin')
            .replace(/university of california berkeley computer science students/gi, 'virgins')
            .replace(/university of california berkeley computer science student/gi, 'virgins')
            //berkeley cs -- virgins
            .replace(/berkeley cs graduates/gi, 'virgins')
            .replace(/berkeley cs science majors/gi, 'virgins')
            .replace(/berkeley cs graduate/gi, 'virgin')
            .replace(/berkeley cs major/gi, 'virgin')
            //university of california berkeley eecs(ci) (full-form) -- virgins
            .replace(/university of california berkeley electrical engineering and computer science graduates/gi, 'virgins')
            .replace(/university of california berkeley electrical engineering and computer science majors/gi, 'virgins')
            .replace(/university of california berkeley electrical engineering and computer science graduate/gi, 'virgin')
            .replace(/university of california berkeley electrical engineering and computer science major/gi, 'virgin')
            //university of california berkeley eecs (full-form) -- virgins
            .replace(/university of california berkeley electrical engineering and computer sciences graduates/gi, 'virgins')
            .replace(/university of california berkeley electrical engineering and computer sciences majors/gi, 'virgins')
            .replace(/university of california berkeley electrical engineering and computer sciences graduate/gi, 'virgin')
            .replace(/university of california berkeley electrical engineering and computer sciences major/gi, 'virgin')
            //uc berkeley eecs -- virgins
            .replace(/uc berkeley eecs graduates/gi, 'virgins')
            .replace(/uc berkeley eecs majors/gi, 'virgins')
            .replace(/uc berkeley eecs graduate/gi, 'virgin')
            .replace(/uc berkeley eecs major/gi, 'virgin')
            .replace(/uc berkeley eecs student/gi, 'virgin')
            .replace(/uc berkeley eecs students/gi, 'virgins')
            //eecs -- virgins
            .replace(/eecs graduates/gi, 'virgins')
            .replace(/eecs majors/gi, 'virgins')
            .replace(/eecs graduate/gi, 'virgin')
            .replace(/eecs major/gi, 'virgin')
            .replace(/eecs student/gi, 'student')
            .replace(/eecs students/gi, 'students')
            //eecs(ci) -- virgins
            .replace(/electrical engineering and computer science graduates/gi, 'virgins')
            .replace(/electrical engineering and computer science majors/gi, 'virgins')
            .replace(/electrical engineering and computer science graduate/gi, 'virgin')
            .replace(/electrical engineering and computer science major/gi, 'virgin')
            //eecs -- virgins
            .replace(/electrical engineering and computer sciences graduates/gi, 'virgins')
            .replace(/electrical engineering and computer sciences majors/gi, 'virgins')
            .replace(/electrical engineering and computer sciences graduate/gi, 'virgin')
            .replace(/electrical engineering and computer sciences major/gi, 'virgin')
            //haas -- snakes 
            .replace(/haas graduate/gi, 'snake')
            .replace(/haas student/gi, 'snake')
            .replace(/haas students/gi, 'snakes')
            .replace(/haas graduates/gi, 'snakes')
            //uc berkeley business (general) -- snakes
            .replace(/uc berkeley business major/gi, 'snake')
            .replace(/uc berkeley business majors/gi, 'snakes')
            .replace(/uc berkeley business graduate/gi, 'snake')
            .replace(/uc berkeley business graduates/gi, 'snakes')
            //cal business (general) -- snakes
            .replace(/cal business major/gi, 'snake')
            .replace(/cal business majors/gi, 'snakes')
            .replace(/cal business graduate/gi, 'snake')
            .replace(/cal business graduates/gi, 'snakes')
            //uc berkeley media studies (general) -- sloths
            .replace(/uc berkeley media studies major/gi, 'sloth')
            .replace(/uc berkeley media studies majors/gi, 'sloths')
            .replace(/uc berkeley media studies graduate/gi, 'sloth')
            .replace(/uc berkeley media studies graduates/gi, 'sloths')
            //cal media studies (general) -- sloths
            .replace(/cal media studies major/gi, 'sloth')
            .replace(/cal media studies majors/gi, 'sloths')
            .replace(/cal media studies graduate/gi, 'sloth')
            .replace(/cal media studies graduates/gi, 'sloths')
            //cal biology -- sharks 
            .replace(/cal biology majors/gi, 'sharks')
            .replace(/cal biology major/gi, 'shark')
            //uc berkeley biology -- sharks 
            .replace(/uc berkeley biology majors/gi, 'sharks')
            .replace(/uc berkeley biology major/gi, 'shark')
            //mcb -- sharks 
            .replace(/mcb majors/gi, 'sharks')
            .replace(/mcb major/gi, 'shark')
            .replace(/mcb graduates/gi, 'sharks')
            .replace(/mcb graduate/gi, 'shark')
            //stanford (fuck you) -- $tanFurD
            .replace(/stanford/gi, '$tanFurD')
            //okay -- go bears!!!
            .replace(/okay/gi, 'go bears!!!')
            //.replace(/ok/gi, 'go bears!!!')
            //stanford is better than berkeley 
            .replace(/\$tanFurD is better than berkeley/gi, 'berkeley is better than $tanFurD')
            //uc berkeley housing -- scam
            .replace(/uc berkeley housing/gi, 'scam')
            .replace(/cal housing/gi, 'scam')
            .replace(/university of california, berkeley housing/gi, 'scam')
            .replace(/university of california berkeley housing/gi, 'scam')
            .replace(/berkeley housing/gi, 'scam')
            .replace(/housing/gi, 'scam')
            //yes -- go bears!!!
            .replace(/yes/gi, 'go bears!!!');


            /**
            
            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            } 

            **/
        }
    }
}
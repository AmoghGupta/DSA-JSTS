// 𝙬𝙝𝙚𝙣 𝙮𝙤𝙪 𝙪𝙨𝙚 𝙗𝙞𝙣𝙙 𝙢𝙚𝙩𝙝𝙤𝙙 𝙤𝙣 𝙖 𝙛𝙪𝙣𝙘𝙩𝙞𝙤𝙣 𝙩𝙝𝙚𝙣 𝙩𝙝𝙞𝙨 𝙧𝙚𝙩𝙪𝙧𝙣𝙨 𝙖 𝙣𝙚𝙬 𝙛𝙪𝙣𝙘𝙩𝙞𝙤𝙣.
// 𝙩𝙝𝙚 𝙛𝙪𝙣𝙘𝙩𝙞𝙤𝙣 𝙩𝙝𝙖𝙩 𝙗𝙞𝙣𝙙 𝙢𝙚𝙩𝙝𝙤𝙙 𝙧𝙚𝙩𝙪𝙧𝙣𝙨 𝙞𝙨 𝙣𝙚𝙬𝙚𝙧 𝙫𝙚𝙧𝙨𝙞𝙤𝙣 𝙤𝙛 𝙩𝙝𝙚 𝙤𝙧𝙞𝙜𝙞𝙣𝙖𝙡 𝙛𝙪𝙣𝙘𝙩𝙞𝙤𝙣 𝙗𝙪𝙩 𝙬𝙞𝙩𝙝 𝙩𝙝𝙞𝙨 𝙤𝙛 𝙛𝙪𝙣𝙘𝙩𝙞𝙤𝙣 𝙞𝙨 𝙧𝙚𝙛𝙚𝙧𝙚𝙣𝙘𝙚𝙙 𝙩𝙤 𝙩𝙝𝙚 𝙥𝙖𝙧𝙖𝙢𝙚𝙩𝙚𝙧 𝙮𝙤𝙪 𝙥𝙖𝙨𝙨𝙚𝙙 𝙞𝙣 𝙗𝙞𝙣𝙙.


let user = {
    name :'Amogh',
    getName: function(){
        console.log(this.name);
    }
};

let ans = user.getName();

let ans2 = user.getName.bind(user); //bind method with the object you want to
ans2(); 

const {Telegraf} = require('telegraf');
const bot = new Telegraf('5110345514:AAHDRHemZx5-EFVS3fcO2q-_ESm3_8_O5G0');

bot.command('start',ctx =>{
    ctx.deleteMessage();
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, ` 
    مرحبا بك عزيزي المتابع ${ctx.from.first_name} أو هل ادعوك ${ctx.from.username} في قناة خيرات حسان 😊🌻🌸 للبدأ إختر من القائمة
    أو اضغط على /`,{ 
})
})


//method that displays the inline keyboard buttons 
bot.hears('من نحن ؟', ctx =>{
    bot.telegram.sendMessage(ctx.chat.id,' https://www.facebook.com/Algerianpositivevibes مجموعة شبابية جزائرية من مختلف ربوع الوطن، تهدف لإحداث التغيير و النهوض بالأمة وفق تعاليم ديننا الحنيف عن طريق تقديم مبادرات و فعاليات  في شتى المجالات، لايفات مع ضيوف أكفاء من كل أنحاء الوطن العربي، منشورات دينية، تعليمية، ثقافية ...',{})
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "res/apv.jpg"
    })
})


bot.hears('/command1', ctx => {
    console.log(ctx.from)
    let Message = `🌻 لائحة الخدمات`;
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, Message, {
        reply_markup: {
            keyboard: [
                [   {
                        text: "من نحن ؟",
                        callback_data: 'من نحن ؟'
                    },
                    {
                    text:"حول الحدث",
                    callback_data:"حول الحدث"

                    },
                    {
                        text: "💛🖤 أهدافنا",
                        callback_data: 'أهدافنا'
                    },
                    {
                        text: "💛🖤 صفحاتنا",
                        callback_data: 'صفحاتنا'
                    },
                    {
                        text: "💛 شعارنا",
                        callback_data: 'شعارنا'
                    },
                    // {
                    //     text: "رايس",
                    //     callback_data: 'رايس'
                    // },
                    {
                        text: "💛 الأبيفي",
                        callback_data: 'الأبيفي'
                    },
                    // {
                    //     text: "نقولك حاجة ؟",
                    //     callback_data: 'نقولك حاجة ؟',
                    // },
                    {
                        text: "♥ حصن المسلم",
                        callback_data: 'حصن المسلم'
                    }
                ],

            ]
        }
    })
})



bot.hears('💛🖤 أهدافنا', ctx =>{
    bot.telegram.sendMessage(ctx.chat.id,`🔸️ أهدافنا:
     ترك الآثر الطيب  ✅
     إيصال رسالة هادفة  ✅ 
     خلق البيئة الملائمة للشباب لإظهار قدراتهم  ✅
      العمل على تعزيز القيم و رفع مستوى الوعي ✅
🔸️ رسالتنا : 
   ▪️ نسعى لنشر الفكر السوي و تغيير الذهنيات بين أوساط الشباب .
🔸️ نظرتنا :
   ▪️نتطلع إلى تقديم برامج نوعية تحدث فارق في المجتمع . `,{})
})

bot.hears('💛 شعارنا',ctx =>{
    bot.telegram.sendMessage(ctx.chat.id,'🔸️ شعارنا : ▪️《شركاء في العطاء 💛 》',{})
})
// bot.hears('رايس', ctx =>{
//     bot.telegram.sendMessage(ctx.chat.id,'@Ahmedamine05 محتاجينك',{})
// })

bot.hears('💛 الأبيفي', ctx =>{
    bot.telegram.sendMessage(ctx.chat.id,'خلينيي منييي قوة وصايي',{})
})

// bot.hears('/command8', ctx =>{
//     bot.telegram.sendMessage(ctx.chat.id,`واه خيو ${ctx.from.first_name}`,{}) 
// })
// bot.hears('نقولك حاجة ؟', ctx =>{
//     bot.telegram.sendMessage(ctx.chat.id,'أسطورة وصايي',{})
// })
bot.hears('💛🖤 صفحاتنا', ctx => {
    console.log(ctx.from)
    let Message = `🌻 🌹تعرف على صفحاتنا `;
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, Message, {
        reply_markup: {
            keyboard: [
                [   {
                        text: "ATM 🧡",
                        callback_data: 'ATM'
                    },
                    {
                        text: "💙 بعبق القرآن نحيا",
                        callback_data: 'بعبق القرآن نحيا'
                    },
                    {
                        text: "💚 نفس طبي",
                        callback_data: 'نفس طبي'
                    },
                    {
                        text: "❤️ تذوق كتابا",
                        callback_data: 'تذوق كتابا'
                    },
                    {
                        text: "🤎 مغلوبة فانتصر",
                        callback_data: 'مغلوبة فانتصر'
                    },
                    {
                        text: "Bac Bag 🤍",
                        callback_data: 'Bac Bag'
                    }
                ],

            ]
        }
    })
})

// return the page link plus the description 


bot.hears('ATM 🧡', ctx => {
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "res/ATM.jpg"
    })
    bot.telegram.sendMessage(ctx.chat.id,'https://www.facebook.com/Algeriantechmakersdz2021 صفحة تقنیة یُدیرھا شباب واعد، یرید الإسھام في بناء مجتمع تعلمي یواكب التغیرات في المجال التّقني والتكنولوجيا بصفة عامة',{ 
    })

})
 

bot.hears('💙 بعبق القرآن نحيا', ctx => {
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "res/bi3aba9.jpg"
    })
    bot.telegram.sendMessage(ctx.chat.id,'https://www.facebook.com/bi3abaqalquran ھي صفحة دینیة تربویة، تعمل على نصح شباب الجزائر بضرورة الالتزام بواجباتھم الدینیة والأخلاقیة وجعلھم یتقربون من الله عزوجل وذلك عن طریق منشورات تعلیمیة دورات قرءانیة وندوات علمیة بحضور مشایخ ودكاترة من ربوع الوطن العربي.',{ 
    })

})

bot.hears('💚 نفس طبي', ctx => {
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "res/nafas.jpg"
    })
    bot.telegram.sendMessage(ctx.chat.id,' https://www.facebook.com/medicalbreath ھي صفحة طبیة، تنشر مختلف ال مواضیع التوعویة صحیة في كل المجالات تغذیة، طب، صیدلة، أسنان..',{ 
    })

})


bot.hears('❤️ تذوق كتابا', ctx => {
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "res/tadawa9.jpg"
    })
    bot.telegram.sendMessage(ctx.chat.id,'https://www.facebook.com/tadaweqkitab ھي صفحة تھتم خصیصا بمحبي الكتب والمطالعة بحیث یتم تقدیم من خلالھا مراجعات، اقتباسات، تحدیات ومسابقات كل ھذا من أجل تنمیة عادة المطالعة في مجتمعنا.',{ 
    })

})


bot.hears('Bac Bag 🤍', ctx => {
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "res/bacbag.jpg"
    })
    bot.telegram.sendMessage(ctx.chat.id,'https://www.facebook.com/bacbag22 لأن البكالوریا ھي مفتاح المستقبل ، صفحة تھتم بالمقبلین على اجتیاز الامتحان المصیري و مساعدتھم طوال عامھم￼ الدراسي بمعیة مجموعة من الأساتذة و المختصین.',{ 
    })

})

bot.hears('🤎 مغلوبة فانتصر', ctx => {
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "res/maghlubah.jpg"
    })
    bot.telegram.sendMessage(ctx.chat.id,'https://www.facebook.com/maghlubah ھي صفحة تھدف لنصرة قضیتنا وقضیة كل المسلمین فلسطین والمسجد الأقصى كما تساھم في الدفاع عن كل القضایا العادلة لمسلمي العالم',{ 
    })

})

bot.hears('♥ حصن المسلم', ctx => {
    console.log(ctx.from)
    let Message = `🌻🌹 لا تنس الأذكار`;
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, Message, {
        reply_markup: {
            keyboard: [
                [   
                    {
                        text: "📿 دعاء سيد الإستغفار",
                        callback_data: 'دعاء سيد الإستغفار'
                    },
                    {
                        text: "☀ أذكار الصباح",
                        callback_data: 'أذكار الصباح',
                    },
                    {
                        text: "🌓 أذكار المساء",
                        callback_data: 'أذكار المساء',
                    },
                    {
                        text: "💤 أذكار النوم",
                        callback_data: 'أذكار النوم'
                    }
                ],

            ]
        }
    })
})

bot.hears("☀ أذكار الصباح", ctx=>{
    bot.telegram.sendPhoto(ctx.chat.id, {
        source:"res/adkar/adkar_sabah.jpg"
    })
})

bot.hears("🌓 أذكار المساء", ctx=>{
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "res/adkar/adkar_masaa.jpg"
    })
})

bot.hears("💤 أذكار النوم", ctx=>{
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "res/adkar/adkar_nawm.jpg"
    })
})

bot.hears("📿 دعاء سيد الإستغفار", ctx=>{
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "res/adkar/sayid_istighfar.jpg"
    })
})


bot.hears('حول الحدث', ctx => {
    console.log(ctx.from)
    let Message = ` معلومات عامة حول حدث رمضان : خيرات حِسان 🌹`;
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, Message, {
        reply_markup: {
            keyboard: [
                [   {
                        text: "🌷 التعریف بالحدث:",
                        callback_data: 'التعریف بالحدث:'
                    },
                    {
                        text: "🌸 المكان و التوقيت:",
                        callback_data: 'المكان و التوقيت:'
                    },
                    {
                        text: "🌻 النشاطات المزمع تنظيمها :",
                        callback_data: 'النشاطات المزمع تنظيمها :'
                    }
                ],

            ]
        }
    })
})

bot.hears("🌷 التعریف بالحدث:", ctx=>{
    bot.telegram.sendMessage(ctx.chat.id,'الحدث عبارة عن ملتقى علمي توعوي تحت مسمى " خیرات حسان »، بمناسبة اقتراب شھر رمضان المبارك، سیتم من خلالھ تقدیم نشاطات متنوعة في المجال الطبي، الدیني، التقني والمقدسي موجھة للشباب والأطفال، بغرض تصحیح العادات والمعتقدات الخاطئة في رمضان وتوجیھ الناس للسلوكیات الحسنة والاجابة عن التساؤلات المطروحة.',{})
})

bot.hears("🌸 المكان و التوقيت:", ctx=>{
    bot.telegram.sendMessage(ctx.chat.id,'السبت 26 مارس 2022 في (لم يتم تحديد الموقع بعد)',{})
})

bot.hears("🌻 النشاطات المزمع تنظيمها :", ctx=>{
    bot.telegram.sendMessage(ctx.chat.id,`
    1 - 💚 نفس طبي 
    - رمضان بنظرة علمیة طبیة فضلھ وفوائده.
    - الصیام والأمراض المزمنة.
    - تقدیم نصائح ومعلومات طبیة حول رمضان والاجابة على الأسئلة المطروحة .

    2 - 💙 بعبق القرآن نحیا
    - مسابقة سمعنا تلاوتك .
    - تصحیح بعض المعتقدات الخاطئة في رمضان،
    - التطرق لمواضیع دینیة مختلفة ونشر معلومات للعامة.

    3 - 🤎 مغلوبة فانتصر  
    - فلسطين ھي قضیة الأمة الاسلامیة، لا بد أن نجعلھا جزءا من حديثنا، عن طریق التعریف بالقضیة، ومعرفة معالم المسجد الأقصى والتطرق لقصة الاسراء والمعراج،
    وشرحھا للأطفال .

    4 - ❤️ تذوق كتابا
    - إقتراح مجموعة من الكتب الدینیة .
    - مناقشة بعض الكتب .
    - مبادرة فالتمسوا نورا .

    5 - BacBag 🤍
    - الدعم النفسي لطلاب البكالوریا .
    - تقدیم نصائح وتوجیه الطلاب في المراجعة .

    6 - Algerian Tech Makers 🧡
    -  التعریف بتطبیق أواب والتطبیقات المفیدة المساعدة على العبادة بالإضافة الى القنوات العلمیة التقنیة المفیدة والمحتوى التقني .

    ملاحظة: كل فریق سیقوم بمسابقة حول المواضیع التي یتطرق الیھا، والفائز یقدم له ھدیة .
    `,{})
})
//method to start get the script to pulling updates for telegram 

bot.launch();
console.log('Bot is launching ..')
console.log('Successfully Launched 200 OK')






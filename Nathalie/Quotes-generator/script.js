function generate() {
    var quotes = {
        "- Jules Renard" : '"The truly free man is the one who can turn down an invitation to dinner without giving an excuse."',
        "- Albert Einstein" : '"Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and its beauty."',
        "- Lana Del Rey" : '"Who are you?" Are you in touch with all of your darkest fantasies? Have you created a life for yourself where you can experience them? I have. I am fucking crazy. But I am free."',
        "- Alysha Speer" : '"You never really know whats coming. A small wave, or maybe a big one. All you can really do is hope that when it comes, you can surf over it, instead of drown in its monstrosity."',
        "- Jenny Valentine" : '"Even when you’d lost everything you thought there was to lose, somebody came along and gave you something for free."',
        "- Aaron Lauritsen" : '"Lifes trials will test you, and shape you, but don’t let them change who you are."'
    }

    var authors = Object.keys(quotes);

    var author = authors[Math.floor(Math.random() * authors.length)];

    var quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}
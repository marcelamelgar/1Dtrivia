var one = {
    "question" : "Who is the youngest member of the band?",
    "wrong1" : "Louis Tomlinson",
    "wrong2" : "Liam Payne",
    "right" : "Harry Styles",
    "wrong3" : "Niall Horan"
}

var two = {
    "question" : "What year was one direction formed?",
    "right" : "2010",
    "wrong1" : "2011",
    "wrong2" : "2012",
    "wrong3" : "2009"
}

var three = {
    "question" : "Which 1d member was the first to become a dad?",
    "wrong1" : "Liam Payne",
    "right" : "Louis Tomlinson",
    "wrong2" : "Zayn Malik",
    "wrong3" : "Niall Horan"
}

var four = {
    "question" : "Which member left the band in 2015?",
    "wrong1" : "Louis Tomlinson",
    "wrong2" : "Liam Payne",
    "wrong3" : "Harry Styles",
    "right" : "Zayn Malik"
}

var five = {
    "question" : "Which famous actor appears in 1Ds music video for Steal My Girl?",
    "wrong1" : "Leonardo DiCaprio",
    "right" : "Danny DeVito",
    "wrong2" : "Mario Casas",
    "wrong3" : "Julia Roberts"
}

var six = {
    "question" : "What year did One Direction start their hiatus?",
    "wrong1" : "2017",
    "wrong2" : "2014",
    "wrong3" : "2016",
    "right" : "2015"
}

var seven = {
    "question" : "What is the name of Harry Styles sister?",
    "right" : "Gemma",
    "wrong1" : "Lottie",
    "wrong2" : "Lou",
    "wrong3" : "Lux"
}

var eight = {
    "question" : "What position did One Direction finish in on The X Factor?",
    "wrong1" : "first",
    "wrong2" : "third",
    "right" : "second",
    "wrong3" : "fourth"
}

var nine = {
    "question" : "William is the middle name of which One Direction member?",
    "right" : "Louis Tomlinson",
    "wrong1" : "Liam Payne",
    "wrong2" : "Harry Styles",
    "wrong3" : "Niall Horan"
}

var ten = {
    "question" : "Which song did One Direction sing at Judges Houses on The X Factor?",
    "wrong1" : "'Gotta be You'",
    "wrong2" : "'Teenage Dirtbag'",
    "right" : "'Torn'",
    "wrong3" : "'Isn't she Lovely'"
}

var eleven = {
    "question" : "How many BRIT Awards have One Direction won?",
    "right" : "7",
    "wrong1" : "6",
    "wrong2" : "8",
    "wrong3" : "2"
}

var twelve = {
    "question" : "Which football club did Louis Tomlinson sign for on a non-contract basis in 2013?",
    "wrong1" : "Manchester City",
    "wrong2" : "Manchester United",
    "wrong3" : "Chealsea",
    "right" : "Doncaster Rovers"
}

var thirteen = {
    "question" : "Which One Direction song features the lyrics, “Baby, I'll take you there, take you there”?",
    "wrong1" : "Happily",
    "wrong2" : "Story of My life",
    "right" : "Kiss You",
    "wrong3" : "More Than This"
}

var fourteen = {
    "question" : "Who has the arrows tattoo?",
    "wrong1" : "Louis Tomlinson",
    "right" : "Liam Payne",
    "wrong2" : "Harry Styles",
    "wrong3" : "Zayn Malik"
}

var fifteen = {
    "question" : "Who has no tattoos?",
    "wrong1" : "Louis Tomlinson",
    "wrong2" : "Harry Styles",
    "wrong3" : "Zayn Malik",
    "right" : "Niall Horan"
}

var sixteen = {
    "question" : "Who dated Selena Gomez?",
    "wrong1" : "Louis Tomlinson",
    "wrong2" : "Liam Payne",
    "wrong3" : "Harry Styles",
    "right" : "Niall Horan"
}

var seventeen = {
    "question" : "Who wrote Fireproof?",
    "wrong1" : "Zayn Malik",
    "right" : "Liam Payne",
    "wrong2" : "Harry Styles",
    "wrong3" : "Niall Horan"
}

var eighteen = {
    "question" : "What year was Niall Borned?",
    "right" : "1993",
    "wrong1" : "1995",
    "wrong2" : "1991",
    "wrong3" : "1997"
}

var nineteen = {
    "question" : "What was the title of their movie?",
    "wrong1" : "This is who we are",
    "right" : "This is us",
    "wrong2" : "Here we are",
    "wrong3" : "This is it"
}

var twenty = {
    "question" : "Which album did they not tour?",
    "wrong1" : "Mifnight Memories",
    "right" : "Made in the AM",
    "wrong2" : "Four",
    "wrong3" : "Up All Night"
}


var questions = [one.question, two.question, three.question, four.question, five.question, 
six.question, seven.question, eight.question, nine.question, ten.question,
eleven.question, twelve.question, thirteen.question, fourteen.question, fifteen.question,
sixteen.question, seventeen.question, eighteen.question, nineteen.question, twenty.question,]

var answers = [
    [one.wrong1, one.wrong2, one.right, one.wrong3],
    [two.right, two.wrong1, two.wrong2, two.wrong3],
    [three.wrong1, three.right, three.wrong2, three.wrong3],
    [four.wrong1, four.wrong2, four.wrong3, four.right],
    [five.wrong1, five.right, five.wrong2, five.wrong3],
    [six.wrong1, six.wrong2, six.wrong3, six.right],
    [seven.right, seven.wrong1, seven.wrong2, seven.wrong3],
    [eight.wrong1, eight.wrong2, eight.right, eight.wrong3],
    [nine.right, nine.wrong1, nine.wrong2, nine.wrong3],
    [ten.wrong1, ten.wrong2, ten.right, ten.wrong3],
    [eleven.right, eleven.wrong1, eleven.wrong2, eleven.wrong3],
    [twelve.wrong1, twelve.wrong2, twelve.wrong3, twelve.right],
    [thirteen.wrong1, thirteen.wrong2, thirteen.right, thirteen.wrong3],
    [fourteen.wrong1, fourteen.right, fourteen.wrong2, fourteen.wrong3],
    [fifteen.wrong1, fifteen.wrong2, fifteen.wrong3, fifteen.right],
    [sixteen.wrong1, sixteen.wrong2, sixteen.wrong3, sixteen.right],
    [seventeen.wrong1, seventeen.right, seventeen.wrong2, seventeen.wrong3],
    [eighteen.right, eighteen.wrong1, eighteen.wrong2, eighteen.wrong3],
    [nineteen.wrong1, nineteen.right, nineteen.wrong2, nineteen.wrong3],
    [twenty.wrong1, twenty.right, twenty.wrong2, twenty.wrong3]
]

var correctas = [2,0,1,3,1,3,0,2,0,2,0,3,2,1,3,3,1,0,1,1]

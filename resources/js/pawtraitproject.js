const bulldogCard = document.querySelector('.bulldog')

bulldogCard.addEventListener('click', function() {
    bulldogCard.classList.toggle('is-flipped')
})

const cockerSpanielCard = document.querySelector('.cocker-spaniel')

cockerSpanielCard.addEventListener('click', function() {
    cockerSpanielCard.classList.toggle('is-flipped')
})

const dobermanCard = document.querySelector('.doberman-pinscher')

dobermanCard.addEventListener('click', function() {
    dobermanCard.classList.toggle('is-flipped')
})

const germanShepherdCard = document.querySelector('.german-shepherd')

germanShepherdCard.addEventListener('click', function() {
    germanShepherdCard.classList.toggle('is-flipped')
})

const goldenRetrieverCard = document.querySelector('.golden-retriever')

goldenRetrieverCard.addEventListener('click', function() {
    goldenRetrieverCard.classList.toggle('is-flipped')
})

const greyhoundCard = document.querySelector('.greyhound')

greyhoundCard.addEventListener('click', function() {
    greyhoundCard.classList.toggle('is-flipped')
})

flipAll = () => {
    // To flip all of the cards to their informational side
    bulldogCard.classList.add('is-flipped')
    cockerSpanielCard.classList.add('is-flipped')
    dobermanCard.classList.add('is-flipped')
    germanShepherdCard.classList.add('is-flipped')
    goldenRetrieverCard.classList.add('is-flipped')
    greyhoundCard.classList.add('is-flipped')
}
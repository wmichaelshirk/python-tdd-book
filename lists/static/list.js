window.Superlists = {}
window.Superlists.initialize = function () {
    function hideErrors() {
        $('.has-error').hide()
    }
    $('input[name="text"]').on('keypress', hideErrors)
    $('input[name="text"]').on('click', hideErrors)
}
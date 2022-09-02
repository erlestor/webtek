$("#documentation-button").click(() => {
  if ($("#documentation").css("display") === "none") {
    $("#documentation").css("display", "block")
    $("#documentation-button").html("Close documentation")
  } else {
    $("#documentation").css("display", "none")
    $("#documentation-button").html("Open documentation")
  }
})

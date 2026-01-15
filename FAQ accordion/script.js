const elsDetails = document.querySelectorAll("details");

elsDetails.forEach((elDetails) => {
  elDetails.querySelector("summary").addEventListener("click", () => {
    elsDetails.forEach((elD) => {
      if (elD === elDetails) return;

      elD.open = false;
    });
  });
});

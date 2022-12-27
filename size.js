(() => {
  const xxS = document.querySelector("[xxs]");
  const xS = document.querySelector("[xs]");
  const S = document.querySelector("[s]");
  const M = document.querySelector("[m]");
  const L = document.querySelector("[l]");
  const xL = document.querySelector("[xl]");
  const xxL = document.querySelector("[xxl]");
  const xxxL = document.querySelector("[xxxl]");
  const selectSize = document.querySelector("[selectSize]");
  const backdrop = document.querySelector("[back-modal]");

  xxS.addEventListener("click", () => {
    selectSize.textContent = "XXS";
    selectSize.style.fontSize = "14px";
    backdrop.classList.toggle("is-hidden"); 
  });
  xS.addEventListener("click", () => {
    selectSize.textContent = "XS";
    selectSize.style.fontSize = "14px";
    backdrop.classList.toggle("is-hidden"); 
  });
  S.addEventListener("click", () => {
    selectSize.textContent = "S";
    selectSize.style.fontSize = "15px";
    backdrop.classList.toggle("is-hidden"); 
  });
  M.addEventListener("click", () => {
    selectSize.textContent = "M";
    backdrop.classList.toggle("is-hidden"); 
  });
  L.addEventListener("click", () => {
    selectSize.textContent = "L";
    backdrop.classList.toggle("is-hidden"); 
  });
  xL.addEventListener("click", () => {
    selectSize.textContent = "XL";
    backdrop.classList.toggle("is-hidden"); 
  });
  xxL.addEventListener("click", () => {
    selectSize.textContent = "XXL";
    selectSize.style.fontSize = "13px"; 
    backdrop.classList.toggle("is-hidden"); 
  });
  xxxL.addEventListener("click", () => {
    selectSize.textContent = "XXXL";
    selectSize.style.fontSize = "10px"; 
    backdrop.classList.toggle("is-hidden"); 
  });
})();

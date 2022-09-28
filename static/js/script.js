let log = console.log;

let display = document.getElementById("display");
let hide = document.getElementById("hide");
let viewEl = document.getElementById("view");
let sucess = document.getElementById("sucess");
let CartEl = document.getElementById("cart");

viewEl.style.display = "none";
sucess.style.display = "none";

let count = 0;
const increment = (e) => {
  if (count > 0 && e == 1) {
    count = count - 1;
    display.textContent = count;
  } else {
    if (e == 2) {
      count = count + 1;
      display.textContent = count;
    }
  }
};

// to view more function
const view = (e) => {
  if (count == 0) {
    if (e == 1) {
      count = 2;
      viewEl.style.display = "block";
      viewEl.innerHTML = ` <h1>How to use</h1> <br> 
            <p> The socket is a precise mold of your residual limb that fits snugly over the limb. It helps attach the prosthetic leg to your body. The suspension system is how the prosthesis stays attached, 
            whether through sleeve suction, vacuum suspension/suction or distal locking through pin or lanyard. </p>`;
      hide.textContent = "hide";
    } else if (e == 2) {
      count = 2;
      viewEl.style.display = "block";
      viewEl.innerHTML = ` <h1>How to use</h1> <br> 
            <p>Put your affected leg about a step behind your other leg.
             Keeping your back leg straight and your back heel on the floor,
              bend your front knee and gently bring your hip and chest toward the wall until you feel a stretch in the calf of your back leg. 
              Hold the stretch for 15 to 30 seconds. Repeat 2 to 4 times. </p>`;
      hide.textContent = "hide";
    } else if (e == 3) {
      count = 2;
      viewEl.style.display = "block";
      viewEl.innerHTML = ` <h1>How to use</h1> <br> 
            <p>The straps of the splint should be done up over the back of the arm. The metal insert should run along the inside of the arm onto the palm of the hand. The splint should not restrict any finger movements.
             Splints can be washed in warm water, but the metal bar should be removed. </p>`;
      hide.textContent = "hide";
    } else if (e == 4) {
      count = 2;
      viewEl.style.display = "block";
      viewEl.innerHTML = ` <h1>How to use</h1> <br> 
            <p>The straps of the splint should be done up over the back of the arm. The metal insert should run along the inside of the arm onto the palm of the hand. The splint should not restrict any finger movements.
             Splints can be washed in warm water, but the metal bar should be removed. </p>`;
      hide.textContent = "hide";
    } else if (e == 5) {
      count = 2;
      viewEl.style.display = "block";
      viewEl.innerHTML = ` <h1>How to use</h1> <br> 
            <p>A complicated splint that holds the arm in abduction at about shoulder level with the forearm midway in flexion,
             generally with an axillary strut for support. </p>`;
      hide.textContent = "hide";
    } else if (e == 6) {
      count = 2;
      viewEl.style.display = "block";
      viewEl.innerHTML = ` <h1>How to use</h1> <br> 
            <p> These ladders feature 36 fingersteps for patients to perform finger climbing activities, increasing movement in the shoulder along the way.</p>`;
      hide.textContent = "hide";
    } else if (e == 7) {
      count = 2;
      viewEl.style.display = "block";
      viewEl.innerHTML = ` <h1>How to use</h1> <br> 
            <p>The straps of the splint should be done up over the back of the arm. The metal insert should run along the inside of the arm onto the palm of the hand. The splint 
            should not restrict any finger movements. Splints can be washed in warm water, but the metal bar should be removed.</p>`;
      hide.textContent = "hide";
    } else if (e == 8) {
      count = 2;
      viewEl.style.display = "block";
      viewEl.innerHTML = ` <h1>How to use</h1> <br> 
            <p>Lie on your back with your knees bent and feet on the floor. Gently lower your knees from side to side, causing a twisting movement in the lower back. Perform this for 30-60 seconds to loosen up the joints of the lower back.</p>
            <a href="https://www.youtube.com/watch?v=0KmvMneIzIg">Click to watch</a>`;
      hide.textContent = "hide";
    } else if (e == 9) {
      count = 2;
      viewEl.style.display = "block";
      viewEl.innerHTML = ` <h1>How to use</h1> <br> 
            <p>This technique is used to strengthen and buildup endurance of weaker muscles and develop co-ordination and establish the normal reversal of antagonistic muscles</p>
            <a href="https://www.youtube.com/watch?v=tB3Izf0BEJgg">Click to watch</a>`;
      hide.textContent = "hide";
    } else if (e == 10) {
      count = 2;
      viewEl.style.display = "block";
      viewEl.innerHTML = ` <h1>How to use</h1> <br> 
            <p>Do not rest the rollers on your ankle joints. Extend your legs to lift up the weight by contracting your quadriceps as you exhale.</p>
          `;
      hide.textContent = "hide";
    } else if (e == 11) {
      count = 2;
      viewEl.style.display = "block";
      viewEl.innerHTML = ` <h1>How to use</h1> <br> 
            <p>Hold pulley handles in both hands, with your elbows straight and thumbs up. Pull down with your unaffected arm to bring affected arm forward and up. Hold the position for 5-10 seconds, 
            then allow the affected arm to relax back to your side. Attach the pulley to the top of the door.</p>
          `;
      hide.textContent = "hide";
    } else if (e == 12) {
      count = 2;
      viewEl.style.display = "block";
      viewEl.innerHTML = ` <h1>How to use</h1> <br> 
            <p>  Training stairs are used by therapists to train patients with progressive stepping post-surgery or injury. 
            These stairs are designed ergonomically and provide a comfortable grip. These stairs are lined with anti-slip material that prevents falls during rehab..</p>
          `;
      hide.textContent = "hide";
    }
  } else {
    viewEl.style.display = "none";
    hide.textContent = "how to use";
    count = 0;
  }
};

// Add to cart
let cartCount = 0;
function cart(e) {
  sucess.style.display = "block";
  sucess.textContent = "Item added sucessfully";

  if (cartCount == 0) {
    setTimeout(() => {
      if (e == 1) {
        cartCount = 1;
        location.href = "/one";
      }
      if (e == 2) {
        cartCount = 1;
        location.href = "/two";
      }
      if (e == 3) {
        cartCount = 1;
        location.href = "/three";
      }
      if (e == 4) {
        cartCount = 1;
        location.href = "/four";
      }
      if (e == 5) {
        cartCount = 1;
        location.href = "/five";
      }
      if (e == 6) {
        cartCount = 1;
        location.href = "/six";
      }
      if (e == 7) {
        cartCount = 1;
        location.href = "/seven";
      }
      if (e == 8) {
        cartCount = 1;
        location.href = "/eight";
      }
      if (e == 9) {
        cartCount = 1;
        location.href = "/nine";
      }
      if (e == 10) {
        cartCount = 1;
        location.href = "/ten";
      }
      if (e == 11) {
        cartCount = 1;
        location.href = "/eleven";
      }
      if (e == 12) {
        cartCount = 1;
        location.href = "/twelve";
      }
      if (e == 13) {
        cartCount = 1;
        location.href = "/thirteen";
      }
    }, 3000);
  } else {
    sucess.style.background = "red";
    sucess.textContent = "Item already added";
  }
}

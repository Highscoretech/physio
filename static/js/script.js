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
            <p> The straps of the splint should be done up over the back of the arm. The metal insert should run along the inside of the arm onto the palm of the hand. The splint should not restrict any finger movements.
             Splints can be washed in warm water, but the metal bar should be removed. </p>`;
      hide.textContent = "hide";
    } else if (e == 4) {
      count = 2;
      viewEl.style.display = "block";
      viewEl.innerHTML = ` <h1>How to use</h1> <br> 
            <p>fill </p>`;
      hide.textContent = "hide";
    } else if (e == 5) {
      count = 2;
      viewEl.style.display = "block";
      viewEl.innerHTML = ` <h1>How to use</h1> <br> 
            <p>To improve your posture, march a few times on the spot while standing tall but comfortable. <br>
            Put your hand in the natural curve of your lower back and observe. <br>
            Relax into the back of your chair when you sit down. The curve you have while standing should be preserved by the lumber support.</p> <a href="https://www.youtube.com/watch?v=tB3Izf0BEJgg">Click to watch</a>`;
      hide.textContent = "hide";
    } else if (e == 6) {
      count = 2;
      viewEl.style.display = "block";
      viewEl.innerHTML = ` <h1>How to use</h1> <br> 
            <p> These ladders feature 36 Fingersteps for patients to perform finger climbing activities, increasing movement in the shoulder along the way.</p>`;
      hide.textContent = "hide";
    } else if (e == 7) {
      count = 2;
      viewEl.style.display = "block";
      viewEl.innerHTML = ` <h1>How to use</h1> <br> 
            <p>Prostheses are manufactured to order and vary according on the area of the body they are intended to replace, the size and shape of the residual limb, and other factors. Your doctor will also consider how much exercise you get and the goals you establish to select the best type of prosthesis for you. Tell the prosthetist about your way of living and inquire about the best type of prosthesis for you.</p>`;
      hide.textContent = "hide";
    } else if (e == 8) {
      count = 2;
      viewEl.style.display = "block";
      viewEl.innerHTML = ` <h1>How to use</h1> <br> 
            <p> Extends posteriorly along the calf, ankle, heel, and sole to the toes, starting at the level of the tibial tubercle. <br>
            Using a 15 cm roll, create an eight-layer dry plaster slab that is the same length as above. <br>
            For usage in the medial and lateral sides of the leg, prepare two slabs that are each about 10 cm shorter. <br>
            Apply the first slab along the back of the calf, the heel, and the sole, starting about 5 cm below the popliteal crease. <br>
            On the medial and lateral sides, apply the side slabs. <br>
            Maintaining the foot in neutral position (ankle MUST be maintained at 90°), secure the smoothed-out slabs to the leg with a moist gauze bandage.</p>`;
      hide.textContent = "hide";
    } else if (e == 9) {
      count = 2;
      viewEl.style.display = "block";
      viewEl.innerHTML = ` <h1>How to use</h1> <br> 
            <p>This technique is used to strengthen and buildup endurance of weaker muscles and develop co-ordination and establish the normal reversal of antagonistic muscles</p>`;
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
    } else if (e == 13) {
      count = 2;
      viewEl.style.display = "block";
      viewEl.innerHTML = ` <h1>How to use</h1> <br> 
            <p> Prostheses are manufactured to order and vary according on the area of the body they are intended to replace, the size and shape of the residual limb, and other factors. Your doctor will also consider how much exercise you get and the goals you establish to select the best type of prosthesis for you. Tell the prosthetist about your way of living and inquire about the best type of prosthesis for you.</p>
          `;
      hide.textContent = "hide";
    } else if (e == 14) {
      count = 2;
      viewEl.style.display = "block";
      viewEl.innerHTML = ` <h1>How to use</h1> <br> 
            <p> Extends posteriorly along the calf, ankle, heel, and sole to the toes, starting at the level of the tibial tubercle. <br>
            Using a 15 cm roll, create an eight-layer dry plaster slab that is the same length as above. <br>
            For usage in the medial and lateral sides of the leg, prepare two slabs that are each about 10 cm shorter. <br>
            Apply the first slab along the back of the calf, the heel, and the sole, starting about 5 cm below the popliteal crease. <br>
            On the medial and lateral sides, apply the side slabs. <br>
            Maintaining the foot in neutral position (ankle MUST be maintained at 90°), secure the smoothed-out slabs to the leg with a moist gauze bandage.</p>
          `;
      hide.textContent = "hide";
    } else if (e == 15) {
      count = 2;
      viewEl.style.display = "block";
      viewEl.innerHTML = ` <h1>How to use</h1> <br> 
            <p> The backrest may be pulled down onto 180 degrees, the thighs can be fixed by an upholstered support system, and feet can be fastened by straps. The backrest can be adjusted horizontally up to 90 degrees by a gas spring to provide leg training in the prone position.</p>
          `;
      hide.textContent = "hide";
    } else if (e == 16) {
      count = 2;
      viewEl.style.display = "block";
      viewEl.innerHTML = ` <h1>How to use</h1> <br> 
            <p> fill </p>
          `;
      hide.textContent = "hide";
    } else if (e == 17) {
      count = 2;
      viewEl.style.display = "block";
      viewEl.innerHTML = ` <h1>How to use</h1> <br> 
            <p> During your recovery from an upper extremity injury, your physical therapist might ask you to use parallel bars. You can do tricep dips with your feet on the ground while standing within the bars. Your triceps, the muscles that extend your elbows and may be necessary to assist you in rising from a chair, become stronger as a result of this. <br>
            Parallel bars are another option for shoulder stretches. Your physical therapist might have you use the bars to stretch your pectoralis (chest) muscles, shoulder muscles, or latissimus (back) muscles with the bars lifted to their highest point. <br>
            Since physical therapists are typically imaginative individuals, they can probably use the parallel bars to accomplish any workout you can think of.</p>
          `;
      hide.textContent = "hide";
    } else if (e == 18) {
      count = 2;
      viewEl.style.display = "block";
      viewEl.innerHTML = ` <h1>How to use</h1> <br> 
            <p> During your recovery from an upper extremity injury, your physical therapist might ask you to use parallel bars. You can do tricep dips with your feet on the ground while standing within the bars. Your triceps, the muscles that extend your elbows and may be necessary to assist you in rising from a chair, become stronger as a result of this. <br>
            Parallel bars are another option for shoulder stretches. Your physical therapist might have you use the bars to stretch your pectoralis (chest) muscles, shoulder muscles, or latissimus (back) muscles with the bars lifted to their highest point. <br>
            Since physical therapists are typically imaginative individuals, they can probably use the parallel bars to accomplish any workout you can think of.</p>
          `;
      hide.textContent = "hide";
    } else if (e == 19) {
      count = 2;
      viewEl.style.display = "block";
      viewEl.innerHTML = ` <h1>How to use</h1> <br> 
            <p> Your splint needs to be snug enough to keep your finger straight and prevent it from drooping. But it shouldn't be so tight that blood flow is obstructed.
            Unless your doctor instructs you otherwise, you should keep your splint on. Your recuperation period may be prolonged each time you remove it and bend your finger tip.
            When you remove your splint, if your skin is white, it can be overly tight.</p>
          `;
      hide.textContent = "hide";
    } else if (e == 20) {
      count = 2;
      viewEl.style.display = "block";
      viewEl.innerHTML = ` <h1>How to use</h1> <br> 
          <p> Because of the softness of the material, the Bags can be used to place patients on operating tables. If necessary, they can also be utilized to put pressure on the patient. To balance the weight of the patient's arm, a hanging loop on one end of the device can be hung from a shoulder gantry.
          To shield the sand from bodily fluids, blood, etc., the bags are thermally sealed. The edges are externally heat sealed for simple cleaning. Regularly check the cloth to make sure there are no cuts or tears.</p>
        `;
      hide.textContent = "hide";
    } else if (e == 21) {
      count = 2;
      viewEl.style.display = "block";
      viewEl.innerHTML = ` <h1>How to use</h1> <br> 
          <p> Stretching on the floor is different than stretching with a stall bar. It gives your body and mind a feeling of solidity. Your mind detects stability when you can grab onto something, like a rung, and can then unwind completely. You can gradually work your way into particular stretches that can benefit your deep tissues thanks to the various rung heights. You can push and pull away from the bars to stretch your hips, back, shoulders, and other body regions by using gravity and your own weight as resistance. Stretching on stall bars can reduce risk of injury and improve physical performance when done under a professional's supervision.
        </p>
        `;
      hide.textContent = "hide";
    } else if (e == 22) {
      count = 2;
      viewEl.style.display = "block";
      viewEl.innerHTML = ` <h1>How to use</h1> <br> 
          <p> The name of the device should give you a hint as to its ability to help you stretch your tight hamstrings. Although it also efficiently stretches your calves, according to the product description. In essence, when you seek professional stretching, you lie down while having each leg individually pulled up and back toward your torso. You can imitate that movement with the aid of this instrument, but you can also perform it independently.</p>
        `;
      hide.textContent = "hide";
    } else if (e == 23) {
      count = 2;
      viewEl.style.display = "block";
      viewEl.innerHTML = ` <h1>How to use</h1> <br> 
          <p> The device needs to be snug enough to maintain the proper leg and angle and stop it from shifting. However, it shouldn't be so tight as to restrict blood flow. You should leave your device on until your doctor instructs you to do otherwise. Every time you take it off and change your angle, your recovery time may be extended. If your skin is white, it can be too tight when you remove your device.</p>
        `;
      hide.textContent = "hide";
    } else if (e == 24) {
      count = 2;
      viewEl.style.display = "block";
      viewEl.innerHTML = ` <h1>How to use</h1> <br> 
          <p> The straps of the splint should be done up over the back of the arm. The device should run along the inside of the arm onto the palm of the hand to the elbow. The splint should not restrict any finger movements.</p>
        `;
      hide.textContent = "hide";
    } else if (e == 25) {
      count = 2;
      viewEl.style.display = "block";
      viewEl.innerHTML = ` <h1>How to use</h1> <br> 
          <p> With the exception of when you're taking a shower or performing other
          your workouts. Having a shower or dressing area nearby could be useful when a family member helps you maintain a neutral shoulder after the brace is removed, position. It is crucial that you put on the
          incapacitation at night. If this bothers you more, you could try sleeping upright.
          comfortable.</p>
        `;
      hide.textContent = "hide";
    } else if (e == 26) {
      count = 2;
      viewEl.style.display = "block";
      viewEl.innerHTML = ` <h1>How to use</h1> <br> 
          <p> The device needs to be snug enough to maintain the proper leg and angle and stop it from shifting. However, it shouldn't be so tight as to restrict blood flow. You should leave your device on until your doctor instructs you to do otherwise. Every time you take it off and change your angle, your recovery time may be extended. If your skin is white, it can be too tight when you remove your device.</p>
        `;
      hide.textContent = "hide";
    } else if (e == 27) {
      count = 2;
      viewEl.style.display = "block";
      viewEl.innerHTML = ` <h1>How to use</h1> <br> 
          <p> The straps of the splint should be done up over the back of the arm. The device should run along the inside of the arm onto the palm of the hand to the elbow. The splint should not restrict any finger movements.</p>
        `;
      hide.textContent = "hide";
    } else if (e == 28) {
      count = 2;
      viewEl.style.display = "block";
      viewEl.innerHTML = ` <h1>How to use</h1> <br> 
          <p> Overdoing it and failing to adhere to your prosthetist's timetable and instructions can cause pain and even harm. You can wear the prosthesis all day after completing the wearing schedule, but not at night while you're sleeping.</p>
        `;
      hide.textContent = "hide";
    } else if (e == 29) {
      count = 2;
      viewEl.style.display = "block";
      viewEl.innerHTML = ` <h1>How to use</h1> <br> 
          <p> Overdoing it and failing to adhere to your prosthetist's timetable and instructions can cause pain and even harm. You can wear the prosthesis all day after completing the wearing schedule, but not at night while you're sleeping.</p>
        `;
      hide.textContent = "hide";
    } else if (e == 30) {
      count = 2;
      viewEl.style.display = "block";
      viewEl.innerHTML = ` <h1>How to use</h1> <br> 
          <p> The straps of the splint should be done up over the back of the arm. The device should run along the inside of the arm onto the palm of the hand to the elbow. The splint should not restrict any finger movements.</p>
        `;
      hide.textContent = "hide";
    } else if (e == 31) {
      count = 2;
      viewEl.style.display = "block";
      viewEl.innerHTML = ` <h1>How to use</h1> <br> 
          <p> The straps of the splint should be done up over the back of the arm. The device should run along the inside of the arm onto the palm of the hand to the elbow. The splint should not restrict any finger movements.</p>
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
      if (e == 14) {
        cartCount = 1;
        location.href = "/fourteen";
      }
      if (e == 15) {
        cartCount = 1;
        location.href = "/fifteen";
      }
      if (e == 16) {
        cartCount = 1;
        location.href = "/sixteen";
      }
      if (e == 17) {
        cartCount = 1;
        location.href = "/seventeen";
      }
      if (e == 18) {
        cartCount = 1;
        location.href = "/eighteen";
      }
      if (e == 19) {
        cartCount = 1;
        location.href = "/nineteen";
      }
      if (e == 20) {
        cartCount = 1;
        location.href = "/twenty";
      }
      if (e == 21) {
        cartCount = 1;
        location.href = "/twenty-one";
      }
      if (e == 22) {
        cartCount = 1;
        location.href = "/twenty-two";
      }
      if (e == 23) {
        cartCount = 1;
        location.href = "/twenty-three";
      }
      if (e == 24) {
        cartCount = 1;
        location.href = "/twenty-four";
      }
      if (e == 25) {
        cartCount = 1;
        location.href = "/twenty-five";
      }
      if (e == 26) {
        cartCount = 1;
        location.href = "/twenty-six";
      }
      if (e == 27) {
        cartCount = 1;
        location.href = "/twenty-seven";
      }
      if (e == 28) {
        cartCount = 1;
        location.href = "/twenty-eight";
      }
      if (e == 29) {
        cartCount = 1;
        location.href = "/twenty-nine";
      }
      if (e == 30) {
        cartCount = 1;
        location.href = "/thirty";
      }
      if (e == 31) {
        cartCount = 1;
        location.href = "/thirty-one";
      }
    }, 3000);
  } else {
    sucess.style.background = "red";
    sucess.textContent = "Item already added";
  }
}

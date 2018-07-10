let currentNode = 1,
    adventure_length = 2;

const init = () =>  {
  document.getElementById("option1").addEventListener("click", () => {
      choose("1");
    },
    false
  );

  document.getElementById("option2").addEventListener("click", () => {
      choose("2");
    },
    false
  );

  document.getElementById("option3").addEventListener("click", () => {
      choose("3");
    },
    false
  );

  document.getElementById("restart").addEventListener( "click", () => {
      restartPage();
    },
    false
  );

  let story   = document.getElementById("story"),
      option1 = document.getElementById("option1"),
      option2 = document.getElementById("option2"),
      option3 = document.getElementById("option3");

  let tree = new TreeModel();
  root = tree.parse({
    id: 1,
    story: "You ware walking through the forest one day and...",
    option1: "The meteor hits the ground right beside you",
    option2: "You fall into a sinkhole",
    option3: "Aliens park their flying ship a few meters over",
    children: [
      {
        id: 11,
        story: "Out of the meteor's crater strange blue gas start coming out.",
        option1: "You run away from the gas",
        option2: "You walk thowards it and inhale blue gas",
        option3: "You faint from the impact of the meteor hitting the ground",
        children: [
          {
            id: 111,
            story: "You come home and nothing happens."
          },
          {
            id: 112,
            story: "You gain superpowers and become ruler of the world."
          },
          {
            id: 113,
            story:
              "You wake up in the hospital few hours later , your head hurts."
          }
        ]
      },
      {
        id: 12,
        story: "You fell and hurt you foot , everything is dark around you.",
        option1: "You start grabing everything around you to help you to stand",
        option2:
          "You remember you have flashlight on your phone and you use it",
        option3: "You start to panic , your mind goes blank",
        children: [
          {
            id: 121,
            story:
              "You just grabbed a lever that pulled you right back onto the surface."
          },
          {
            id: 122,
            story:
              "You light things around you and see that you are surrounded by underground crab people."
          },
          {
            id: 123,
            story:
              "You wake up from the horrible dream , you were only sleeping."
          }
        ]
      },
      {
        id: 13,
        story: "Aliens start coming out of the space ship.",
        option1: "You stride forwards to greet them",
        option2: "You stay away and observe",
        option3: "You take you gun and start shooting into the air",
        children: [
          {
            id: 131,
            story: "You just made some new otherworldly friends."
          },
          {
            id: 132,
            story:
              "After a while they notice you and capture you for experiments."
          },
          {
            id: 133,
            story: "You have been arrested for disturbing peace and quiet."
          }
        ]
      }
    ]
  });

  let rootnode = root.first((node) => {
    return node.model.id === 1;
  });

  story.innerText   = rootnode.model.story; //"You ware walking through the woods one day and ..."
  option1.innerText = rootnode.model.option1; //"The meteor hits the ground right beside you"
  option2.innerText = rootnode.model.option2; //"You fall into a sinkhole"
  option3.innerText = rootnode.model.option3; //"Aliens park their flying ship a few meters over"
}

const choose = (option) => {

  if (currentNode.toString().length < adventure_length) {
    let chosennode = root.first((node) => {
      return node.model.id === parseInt(currentNode + option);
    });

    currentNode = chosennode.model.id;

    story.innerText   = chosennode.model.story;
    option1.innerText = chosennode.model.option1;
    option2.innerText = chosennode.model.option2;
    option3.innerText = chosennode.model.option3;
  } else {
    let chosennode = root.first( (node) => {
      return node.model.id === parseInt(currentNode + option);
    });
    currentNode     = chosennode.model.id;
    story.innerText = chosennode.model.story;
    option1.remove();
    option2.remove();
    option3.remove();
  }
}

const restartPage = () => {
  location.reload();
}

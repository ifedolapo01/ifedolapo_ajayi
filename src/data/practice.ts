/**
 * Voice copy. The facts inside it are real — Aptech, FlexiSAF, the current
 * role, Abuja — and the opinions are drawn from how Ifedolapo described his
 * own priorities: detail, structure, clear interfaces, making complicated
 * things feel simple. It is a draft written in his voice, meant to be edited
 * until it is exactly his.
 */
export const practice = {
  lead: "I build the layer people actually touch.",
  paragraphs: [
    "I came to this the long way round. Two years at Aptech in Abuja learning the fundamentals properly — programming, databases, how software is engineered rather than just typed — while building things on the side to work out which part I liked. It turned out to be the front: the layer where a decision you make becomes something a person can feel.",
    "Interning at FlexiSAF was the first time code I wrote had to survive somebody else reading it. That changes how you write it. You stop being clever and start being clear.",
    "Now I build interfaces for a records management company. That means screens people sit in front of for hours — not landing pages. Nobody is ever delighted by a records system; they want it to stop being in the way. So most of the work is subtraction. Fewer steps. Clearer states. One obvious next thing to do.",
    "Which is the part I actually enjoy: taking something dense and making it feel ordinary. That's harder than making something pretty, and almost nobody notices when you get it right. Fine by me.",
  ],
  notes: [
    {
      id: "n1",
      label: "On design files",
      text: "A design file is a question. The build is the answer — and the answer is allowed to disagree, as long as it says why.",
    },
    {
      id: "n2",
      label: "On states",
      text: "Empty, loading, error, too-much-data. Those are most of the screens a real user hits. They get designed, or they get discovered.",
    },
    {
      id: "n3",
      label: "On components",
      text: "If I can't say what a component is for in one sentence, it's two components.",
    },
  ],
  now: [
    { field: "Based in", value: "Abuja, Nigeria" },
    { field: "Currently", value: "Frontend Engineer, Secured Records Management Solutions" },
    { field: "Learning", value: "[[what you're working through at the moment]]" },
    { field: "Open to", value: "[[frontend roles / freelance / collaborations — your call]]" },
  ],
} as const;

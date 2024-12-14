// List with a separator 
const poem = {
  lines: [
    'I write, erase, rewrite',
    'Erase again, and then',
    'A poppy blooms.'
  ]
};

export default function Poem() {
  let output = [];
  poem.lines.forEach((line, idx) => {
    output.push(
      <hr key={idx + 'f'} />

    );

    output.push(
      <p key={idx + 'x'}>{line} </p>
    );

    
  })

  // console.log(output);
  // remove the first <hr />
  output.shift(); // first line will be removed, to see the differenet comment this and check 
  // console.log(output);
  return (
    <article>
      {output}
    </article>
  );
}

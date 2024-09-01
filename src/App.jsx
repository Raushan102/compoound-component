import Accordion from "./components/Accordion.jsx";

function App() {
  return (
    <main>
      <section>
        <h2>my work with us</h2>
        <Accordion className="accordion">
          <Accordion.Item className="accordion-item" >
            <Accordion.Title id="experience" className='accordion-item-title'>
              we go 20 year experience
            </Accordion.Title>
            <Accordion.Content id="experience" className='accordion-item-content'>
              <article>
                <p>you can&apos;t go wrong with us</p>
                <p>
                  we in the bigness for planning highly individualized vacation
                  trips fro more than 20 years
                </p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item className="accordion-item">
            <Accordion.Title id="safe"  className='accordion-item-title'>
              we are working with local guides
            </Accordion.Title>
            <Accordion.Content id="safe" className='accordion-item-content'>
              <article>
                <p>we are not working along from our office</p>
                <p>
                  instead of we are working with local guys frp our safe
                  vacation
                </p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </section>
    </main>
  );
}

export default App;

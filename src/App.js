import Form from './Form';
import Tasks from './Tasks';
import Buttons from './Buttons';
import Section from './Section';
import Container from './Container';
import Header from './Header';

const tasks = [
  { id: 1, content: "Wykopać głęboki dół", done: true },
  { id: 2, content: "Polecieć na marsa", done: false }
];

const hideDoneTasks = false;

function App() {
  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Section
        title="Lista zadań"
        body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
        extraHeaderContent={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />}
      />

    </Container>
  );
}

export default App;

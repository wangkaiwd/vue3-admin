import { defineComponent } from 'vue';
import Home from './pages/Home/Home';

const App = defineComponent({
  setup () {
    return () => <Home/>;
  }
});
export default App;

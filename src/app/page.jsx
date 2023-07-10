import Form1 from './components/Form1';
import Form2 from './components/Form2';
import { getHomePageData } from '../../utils/ButterCMS';

const HomePage = async () => {
  const { form1_component } = await getHomePageData();
  return (
    <>
      <div className="form-container">
        <Form1
          form_title={form1_component.form_title}
          input1_title={form1_component.input1_title}
          input2_title={form1_component.input2_title}
          submit_button={form1_component.submit_button}
        ></Form1>
        <Form2></Form2>
      </div>
    </>
  );
};

export default HomePage;

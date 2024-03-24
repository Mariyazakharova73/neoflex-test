import Cards from '../../components/Cards/Cards';
import Text, { TextSize, TextTheme } from '../../components/Text/Text';
import s from './MainPage.module.css';

const MainPage = () => {
	return (
		<main className={s.main}>
			<Text text='Наушники' theme={TextTheme.LIGHT} size={TextSize.L}/>
      <Cards/>
      <Text text='Беспроводные наушники' theme={TextTheme.LIGHT} size={TextSize.L}/>
		</main>
	);
};

export default MainPage;

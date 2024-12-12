// import DocumentTitle from '../../components/DocumentTitle';
import css from './HomePage.module.css'

const HomePage = () => {
  return (
    <div className={css.container}>
      {/* <DocumentTitle>Home</DocumentTitle> */}
        <h2 className={css.title}>Welcome to the Phonebook App</h2>
        <p className={css.text}>Here you can create and save your contacts</p>
    </div>
  )
}

export default HomePage;
import { useMediaQuery } from 'react-responsive'
import './App.css'
import eagl from './assets/images/eagl.png'
import logo from './assets/images/logo.png'
import pepe2 from './assets/images/pepe2.png'
import tg from './assets/images/tg.png'
import x from './assets/images/x.png'

function App() {
	const isDesktop = useMediaQuery({ minWidth: 960 })
	const isMobile = useMediaQuery({ maxWidth: 959 })
	return (
		<div>
			{isDesktop && (
				<div className='App'>
					<div className='logo'>
						Red <span> TRON </span> Chilli Peppers
					</div>

					<div className='toolbar-icons'>
						<div className='icon'>
							<img src={eagl} alt='Wolf icon' />
						</div>
						<div className='icon'>
							<img src={tg} alt='Paper Plane icon' />
						</div>
						<div className='icon'>
							<img src={x} alt='Scissors icon' />
						</div>
					</div>

					<img src={pepe2} alt='Pepe' className='pepe' />

					<div className='content'>
						<h1 className='title'>
							The Red <span className='highlight'>TRON</span> Chili Peppers: the
							#1 Cryptonian rock band
						</h1>
						<p className='subtitle'>
							Fathers of tron rock, tron funk, hip tron and psychodelic tron
						</p>
						<div className='buttons'>
							<button className='button'>sun pump</button>
							<button className='button button-alt'>CA COPY</button>
						</div>
					</div>
				</div>
			)}
			{isMobile && (
				<div className='App'>
					<div className='logo'>
						<img src={logo} alt='Wolf icon' />
					</div>
					<main className='main-content'>
						<div className='text-content'>
							<div className='toolbar-icons'>
								<div className='icon'>
									<img src={eagl} alt='Wolf icon' />
								</div>
								<div className='icon'>
									<img src={tg} alt='Paper Plane icon' />
								</div>
								<div className='icon'>
									<img src={x} alt='Scissors icon' />
								</div>
							</div>
							<h1 className='title'>
								The Red <span className='highlight'>TRON</span> Chili Peppers:{' '}
								<br />
								the #1 Cryptonian rock band
							</h1>
							<img src={pepe2} alt='Pepe' className='pepe' />
						</div>

						<div className='buttons'>
							<button className='button'>SUN PUMP</button>
							<button className='button button-alt'>CA COPY</button>
						</div>
					</main>
				</div>
			)}
		</div>
	)
}

export default App

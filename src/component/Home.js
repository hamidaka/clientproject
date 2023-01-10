import React from 'react'

const Home = () => {
  return (
    <>
 <header>
           <img src="https://saintjust34.com/wp-content/uploads/2020/10/Couv-vide-dressing-1-1030x391.jpg" />
            <nav>
                <ul>
                   
                    <li><Link to ='/'>Home</Link></li>
                    <li><Link to ='/login'>Login</Link></li>
                    <li><a href="#">Registre</a></li>
                    <li><a href="#">Terms of use</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>


        </header>
        <main>
           <div className="carousel-item active">
                    <img className="w-100" src="https://media.istockphoto.com/id/1336314651/fr/vectoriel/cintre-garde-robe-de-magasin-de-dessins-anim%C3%A9s-robe-ou-jeans-pantalon-et-veste-v%C3%AAtements.jpg?s=612x612&w=0&k=20&c=FBmou6X95Kzs8kjYr706Hf_G5kszlYh4hYJQjk8xj-0=" alt="Image" />
                   
                    
              
                </div>
        </main>
  
    </>
  )
}

export default Home

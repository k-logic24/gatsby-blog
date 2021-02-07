import React from 'react'
import Particles from 'react-tsparticles'

const Particle: React.FC = () => {
  React.useEffect(() => {
    console.log(`render`)
  }, [])
  return (
    <Particles
      id="tsparticles"
      className="h-full"
      canvasClassName="particles-canvas"
      options={{
        background: {
          color: {
            value: 'red',
          },
          image: "url('https://newevolutiondesigns.com/images/freebies/4k-wallpaper-1.jpg')",
          position: "50% 50%",
          repeat: "no-repeat",
          size: "cover"
        },
        fpsLimit: 60,
        interactivity: {
          detectsOn: 'canvas',
          events: {
            onClick: {
              enable: false,
            },
            onHover: {
              enable: false,
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: '#f87171',
          },
          links: {
            color: '#ffffff',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
  )
}

export default Particle

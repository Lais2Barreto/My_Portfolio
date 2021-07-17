 //qnd a arvore de elementos estiver carregada, ai sim dispara as animações; arrow function pq é evento de callback 
    // ou seja, essa outra função é executada qnd a função addEventListener tiver executado o DOMContentLoaded (pagina carregada)
    document.addEventListener('DOMContentLoaded', () => {
      let tl = gsap.timeline();        //instancio ela com esse nome; estou passando os detalhes da timeline (ordem de animação dos eventos na pagina) para a variavel
      //concatenar os elementos q qr 
      tl
      .from(".menu-1", {
        duration: 1,
        y: 50,    //elementos carregados de baixo pra cima
        opacity: 0,
        delay: .5 ,
        ease: "power3.out",
      })
      .from(".menu-2", {
        duration: 1,
        opacity: 0,
        ease: "power3.out",
      }, "-=0.8") //adiantar os demais em 0.8s; para adiar mais pro começo da timeline, coloca -= e o tempo
      .from(".menu-3", {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power3.out",
      }, "-=0.8") //coloca nos outros tb
      .from(".menu-4", {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power3.out",
      }, "-=0.8")
      .from(".menu-5", {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power3.out",
      }, "-=0.8")
      .from(".container-item div", {
        duration: 1,
        y: 300,
        opacity: 0,
        stagger: {each: 0.2},    //seleciona a lista de divs e estabelece o parametro each pra cada uma: tempo de transição entre um elem e outro
        ease: "power3.out",
      }, "-=0.8")
      .from(".container-item img", {
        duration: 1,
        y: 300,
        opacity: 0,
        ease: "power3.out",
      }, "-=0.8")
      .from(".bg-hero", {
        duration: 1,
        y: 300,
        opacity: 0,
        ease: "power3.out",
      }, "-=0.8")

      gsap.registerPlugin(ScrollTrigger);

      gsap.from('#section01 div', {
        duration: 1,
        y: 300,
        opacity: 0,
        stagger: {each: 0.2},
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#section01",
        }
      })

      gsap.from('#section02 div', {
        duration: 2,
        y: 300,
        opacity: 0,
        stagger: {each: 0.2},
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#section02",
        }
      })
    }) 
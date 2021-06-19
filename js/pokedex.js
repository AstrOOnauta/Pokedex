var cardsPokemon = [];
var infoCardsPokemon = []
const pokemon = ["Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle",
                "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna",
                "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata", "Raticate", "Spearow", "Fearow",
                "Ekans", "Arbok", "Pikachu", "Raichu", "Sandshrew", "Sandslash", "Nidoran ♀", "Nidorina",
                "Nidoqueen", "Nidoran ♂", "Nidorino", "Nidoking", "Clefairy", "Clefable", "Vulpix",
                "Ninetales", "Jigglypuff", "Wigglytuff", "Zubat", "Golbat", "Oddish", "Gloom", "Vileplume",
                "Paras", "Parasect", "Venonat", "Venomoth", "Diglett", "Dugtrio", "Meowth", "Persian",
                "Psyduck", "Golduck", "Mankey", "Primeape", "Growlithe", "Arcanine", "Poliwag", "Poliwhirl",
                "Poliwrath", "Abra", "Kadabra", "Alakazam", "Machop", "Machoke", "Machamp", "Bellsprout",
                "Weepinbell", "Victreebel", "Tentacool", "Tentacruel", "Geodude", "Graveler", "Golem",
                "Ponyta", "Rapidash", "Slowpoke", "Slowbro", "Magnemite", "Magneton", "Farfetch'd", "Doduo",
                "Dodrio", "Seel", "Dewgong", "Grimer", "Muk", "Shellder", "Cloyster", "Gastly", "Haunter",
                "Gengar", "Onix", "Drowzee", "Hypno", "Krabby", "Kingler", "Voltorb", "Electrode",
                "Exeggcute", "Exeggutor", "Cubone", "Marowak", "Hitmonlee", "Hitmonchan", "Lickitung",
                "Koffing", "Weezing", "Rhyhorn", "Rhydon", "Chansey", "Tangela", "Kangaskhan", "Horsea",
                "Seadra", "Goldeen", "Seaking", "Staryu", "Starmie", "Mr. Mime", "Scyther", "Jynx",
                "Electabuzz", "Magmar", "Pinsir", "Tauros", "Magikarp", "Gyarados", "Lapras", "Ditto",
                "Eevee", "Vaporeon", "Jolteon", "Flareon", "Porygon", "Omanyte", "Omastar", "Kabuto",
                "Kabutops", "Aerodactyl", "Snorlax", "Articuno", "Zapdos", "Moltres", "Dratini", "Dragonair",
                "Dragonite", "Mewtwo", "Mew"]

const typePokemon = ["Planta/Venenoso", "Planta/Venenoso", "Planta/Venenoso", "Fogo", "Fogo", "Fogo/Voador",
                    "Água", "Água", "Água", "Inseto", "Inseto", "Inseto/Voador", "Inseto/Venenoso",
                    "Inseto/Venenoso", "Inseto/Venenoso", "Normal/Voador", "Normal/Voador", "Normal/Voador",
                    "Normal", "Normal", "Normal/Voador", "Normal/Voador", "Venenoso", "Venenoso", "Elétrico",
                    "Elétrico", "Terrestre", "Terrestre", "Venenoso", "Venenoso", "Venenoso/Terrestre",
                    "Venenoso", "Venenoso", "Venenoso/Terrestre", "Fada", "Fada", "Fogo", "Fogo",
                    "Normal/Fada", "Normal/Fada", "Venenoso/Voador", "Venenoso/Voador", "Planta/Venenoso",
                    "Planta/Venenoso", "Planta/Venenoso", "Inseto/Planta", "Inseto/Planta", "Inseto/Planta",
                    "Inseto/Venenoso", "Terrestre", "Terrestre", "Normal", "Normal", "Água", "Água",
                    "Lutador", "Lutador", "Fogo", "Fogo", "Água", "Água", "Água/Lutador", "Psíquico",
                    "Psíquico", "Psíquico", "Lutador", "Lutador", "Lutador", "Planta/Venenoso",
                    "Planta/Venenoso", "Planta/Venenoso", "Água/Venenoso", "Água/Venenoso", "Pedra/Terrestre",
                    "Pedra/Terrestre", "Pedra/Terrestre", "Fogo", "Fogo", "Água/Psíquico", "Água/Psíquico",
                    "Elétrico/Metal", "Elétrico/Metal", "Normal/Voador", "Normal/Voador", "Normal/Voador",
                    "Água", "Água/Gelo", "Venenoso", "Venenoso", "Água", "Água/Gelo", "Fantasma/Venenoso",
                    "Fantasma/Venenoso", "Fantasma/Venenoso", "Pedra/Terrestre", "Psíquico", "Psíquico",
                    "Água", "Água", "Elétrico", "Elétrico", "Planta/Psiquíco", "Planta/Psiquíco", "Terrestre",
                    "Terrestre", "Lutador", "Lutador", "Normal", "Venenoso", "Venenoso", "Terrestre/Pedra",
                    "Terrestre/Pedra", "Normal", "Planta", "Normal", "Água", "Água", "Água", "Água", "Água",
                    "Água/Psíquico", "Psíquico/Fada", "Inseto/Voador", "Gelo/Psíquico", "Elétrico", "Fogo",
                    "Inseto", "Normal", "Água", "Água/Voador", "Água/Gelo", "Normal", "Normal", "Água",
                    "Elétrico", "Fogo", "Normal", "Pedra/Água", "Pedra/Água", "Pedra/Água", "Pedra/Água",
                    "Pedra/Voador", "Normal", "Gelo/Voador", "Elétrico/Voador", "Fogo/Voador", "Dragão",
                    "Dragão", "Dragão/Voador", "Psíquico", "Psíquico"]
                    
const numbersPokemon = 150;
var infoClick = [];
var info = [];
var infoAboutPokemon = ["Bulbasaur pode ser visto tirando uma soneca ao sol. A semente nas suas costas cresce cada vez mais à medida que absorve os raios solares.",
                        "Há um broto nas costas deste Pokémon. As pernas e o tronco de Ivysaur são grossos e fortes para aguentar seu peso. Se começa a passar mais tempo no sol, é sinal de que seu bulbo logo irá florescer em uma flor grande.",
                        "Há uma flor grande nas costas de Venusaur. Dizem que a flor adquire cores vívidas se está bem nutrido e se toma muito sol. O aroma da flor acalma as emoções das pessoas.",
                        "A chama que queima na ponta da sua cauda é um indicador de suas emoções. A chama oscila quando Charmander está contente. Se o Pokémon fica com raiva, a chama queima violentamente.",
                        "Charmeleon destrói seus oponentes sem pena com suas garras afiadas. Torna-se agressivo quando encontra um oponente forte e então a chama na ponta da sua cauda queima intensamente em uma cor azulada.",
                        "Charizard voa pelo céu à procura de oponentes poderosos. Aspira fogo de temperatura tão ardente que derrete qualquer coisa. Entretanto, este Pokémon nunca virará seu hálito ardente em oponentes mais fracos que ele.",
                        "A carapaça de Squirtle não serve só para sua proteção. As ranhuras em sua superfície e a sua forma arredondada ajudam a minimizar a resistência na água permitindo que nade em alta velocidade.",
                        "Sua cauda grande é coberta por um pelo grosso. A cauda se torna cada vez mais escura à medida que Wartortle envelhece. Os arranhões na sua carapaça são evidências da resistência deste Pokémon em batalha.",
                        "Blastoise possui canos de água muito precisos que sobressaem de sua carapaça. Podem dar tiros de água com tamanha precisão que conseguem abater latas vazias a uma distância de mais de 50 metros.",
                        "Caterpie tem um apetite voraz. Pode devorar folhas maiores do que seu corpo bem diante de seus olhos. Este Pokémon libera um cheiro terrivelmente forte das suas antenas.",
                        "O invólucro que reveste o corpo deste Pokémon é duro como uma prancha de metal. Metapod não se move muito e permanece imóvel para que seus órgãos moles evoluam dentro de sua couraça.",
                        "Butterfree tem uma habilidade especial para achar o pólen delicioso das flores. Pode localizar, extrair e carregar o mel das flores que estão florescendo a mais de 10km do seu ninho.",
                        "Weedle tem um olfato extremamente aguçado. É capaz de distinguir os tipos de folhas que gosta dos tipos que não gosta simplesmente farejando com seu nariz vermelho grande.",
                        "Kakuna permanece praticamente imóvel se agarrando a árvores. Entretanto, a preparação para a sua futura evolução é extremamente intensa. A prova disto é a quentura de sua carapaça.",
                        "Beedrill são extremamente territoriais. Por segurança, aconselha-se que ninguém chegue perto de seus ninhos, pois se enraivecidos, atacam em um enxame furioso.",
                        "Pidgey tem um senso de direção extremamente aguçado. É capaz de voltar para seu ninho sem errar, mesmo que seja removido dos lugares que conhece.",
                        "Pidgeotto se apossa de uma área grande como seu próprio território. Este Pokémon voa para vigiar seu espaço. Se alguém invadir o seu território, punirá o invasor arduamente com suas garras afiadas sem piedade.",
                        "Este Pokémon tem uma plumagem deslumbrante de belas penas brilhantes. Muitos Treinadores são atraídos pela beleza extraordinária das penas em sua cabeça, os convencendo a escolher Pidgeot como seu Pokémon.",
                        "Rattata é extremamente prudente. Move suas orelhas até enquanto dorme para ouvir tudo. Não é particular na hora de escolher seu habitat podendo fazer seu ninho em qualquer lugar.",
                        "As presas robustas de Raticate crescem continuamente. Para mantê-las afiadas, rói troncos e pedras. Pode até mesmo roer as paredes das casas.",
                        "Spearow tem um piado muito alto que pode ser ouvido a mais de 1 km de distância. Se seu piado agudo e lamentoso for ouvido por todo lado, é sinal de que estão avisando uns aos outros que há perigo iminente.",
                        "Fearow é reconhecido por seu pescoço e bico longo. O formato de seu corpo é bom para caça em terra ou água. Move seu bico fino agilmente para capturar presas.",
                        "Ekans se enrola para descansar. Adota esta posição para responder rapidamente a qualquer ameaça de qualquer direção levantando a cabeça com uma encarada feroz.",
                        "Este Pokémon é terrivelmente forte e pode esmagar qualquer coisa com seu corpo. Pode achatar até cilindros pesados de aço. Uma vez que Arbok se enrosca em seu oponente, escapar de seu abraço é impossível.",
                        "Quando Pikachu acha alguma coisa nova, lança uma carga elétrica nela. Se você encontrar uma fruta torrada, é prova de que este Pokémon errou na intensidade de sua carga elétrica.",
                        "Se suas bolsas elétricas ficarem sobrecarregadas, Raichu aterrará sua cauda no solo para descarregar eletricidade. Zonas queimadas podem ser encontradas perto de seu ninho.",
                        "O corpo de Sandshrew é configurado para absorver água sem desperdício, o que permite que sobreviva em desertos áridos. Enrola-se para se proteger de seus oponentes.",
                        "O corpo de Sandslash é coberto por espinhos duros, que são partes endurecidas da sua pele. Troca seus espinhos uma vez por ano e os espinhos novos crescem por baixo dos velhos.",
                        "Nidoran ♀ tem espinhos que secretam um veneno poderoso. Pensa-se que foram desenvolvidos como proteção para este Pokémon pequenino. Quando enraivado, libera uma toxina horrível pelo seu chifre.",
                        "Quando estão entre amigos e familiares, escondem seus espinhos para evitar acidentes. Ficam nervosos se forem separados de seu grupo.",
                        "O corpo de Nidoqueen é revestido de escamas duríssimas. Gosta de lançar seus oponentes pelos ares com suas investidas fortes. Dá tudo de si para proteger suas crias.",
                        "Nidoran ♂ desenvolveu músculos para mover suas orelhas em qualquer direção. Nem mesmo o menor som passa desapercebido por este Pokémon.",
                        "Nidorino tem um chifre que é mais duro do que um diamante. Se sentir uma presença hostil, todos os espinhos nas suas costas se eriçam, e assim, desafia o oponente com toda sua força.",
                        "A cauda grossa de Nidoking tem um poder imensamente destrutivo. Com uma rabada, pode derrubar uma torre de transmissão de metal. Uma vez que este Pokémon entra em um estado voraz, não há como pará-lo.",
                        "Toda noite de lua cheia, grupos deste Pokémon saem para brincar. Ao amanhecer, os Clefairy cansados retornam aos seus refúgios nas montanhas e vão dormir pertinho uns dos outros.",
                        "Clefable movimenta-se saltitando como se estivesse usando suas asas. Seus passinhos leves permitem que ande sobre água. É conhecido por caminhar em lagos em noites calmas de lua cheia.",
                        "Ao nascer, Vulpix tem uma cauda branca. A cauda se separa em seis se este Pokémon recebe bastante amor de seu Treinador. As seis caudas se encaracolam majestosamente.",
                        "Ninetales emite uma luz sinistra de seus olhos vermelhos para controlar totalmente a mente de seus oponentes. Diz-se que este Pokémon vive por mil anos.",
                        "As cordas vocais de Jigglypuff podem se ajustar sem problema ao comprimento de onda de sua voz. Usa esta habilidade para cantar com um comprimento de onda preciso para adormecer seus oponentes.",
                        "Wigglytuff tem olhos enormes e em forma de pires. As superfícies de seus olhos são sempre cobertas com uma camada fina de lágrimas. Se qualquer poeira entra nos olhos deste Pokémon, é lavada rapidamente.",
                        "Zubat permanece imóvel quietamente no escuro durante o dia. Se este Pokémon passasse muito tempo exposto ao sol, correria perigo de sofrer queimaduras leves.",
                        "Golbat ama beber sangue de seres vivos. Este Pokémon é particularmente ativo em noites escuras. Ao cair da noite sai voando para procurar sangue fresco.",
                        "Durante o dia, Oddish se enterra no solo para absorver nutrientes usando seu corpo inteiro. Quanto mais fértil for o solo, mais lustrosas se tornam as suas folhas.",
                        "Gloom libera uma fragrância fedorenta do pistilo de sua flor. Quando se depara com perigo, o fedor aumenta. Se estiver se sentindo calmo e em segurança, não libera seu aroma fétido.",
                        "O pólen tóxico de Vileplume causa ataques de alergia aguda. Por isso não é aconselhável se aproximar de nenhuma flor na selva, por mais linda que seja.",
                        "Paras tem cogumelos parasitas crescendo em suas costas chamados tochukaso. Eles crescem ao se alimentarem dos nutrientes deste Pokémon Inseto. São muito valiosos como elixir de vida.",
                        "Parasect são conhecidos por infestar árvores grandes em massa e drenar os nutrientes de seus troncos e raízes. Quando a árvore infestada padece, movem-se de uma vez para outra árvore.",
                        "Diz-se que Venonat evoluiu com um revestimento fino de pelo rígido que cobre e protege seu corpo inteiro. Possui olhos tão grandes que não há uma presa que passe desapercebida.",
                        "Venomoth é um Pokémon noturno e só ativo à noite. Suas presas favoritas são insetos pequenos que se encontram em volta das luzes nas ruas, atraídos pela luz na escuridão.",
                        "Diglett são criados na maioria das fazendas agrícolas pela simples razão de que quando escavam, deixam o solo perfeitamente lavrado para o plantio. O solo fica ideal para o cultivo de legumes deliciosos.",
                        "Dugtrio são na verdade trigêmeos originados de um único corpo, por isso pensam da mesma forma. Trabalham em equipe e sem descanso quando escavam.",
                        "Meowth retrai as garras afiadas das suas patas para esgueirar-se furtivamente sem fazer barulho. Por algum motivo, este Pokémon ama moedas brilhantes que reluzem com a luz.",
                        "Persian tem seis bigodes chamativos que dão uma aparência feroz a este Pokémon. Seus bigodes detectam os movimentos do ar para determinar o que está à sua volta. Torna-se manso se for agarrado pelos bigodes.",
                        "Psyduck usa um poder misterioso que gera ondas cerebrais supostamente observadas apenas em seres adormecidos. Esta descoberta motivou polêmica entre estudiosos.",
                        "Golduck alcança uma velocidade incrível graças às nadadeiras membranosas de suas patas dianteiras e traseiras e à forma aerodinâmica de seu corpo. A velocidade deste Pokémon de fato supera a de qualquer nadador.",
                        "Quando Mankey começa a se tremer e sua respiração nasal fica ofegante, é o sinal certo de que está ficando com raiva. Entretanto, porque explode de raiva rapidamente, é impossível alguém escapar de sua fúria.",
                        "Quando Primeape fica furioso, sua circulação sanguínea é intensificada e seus músculos ficam ainda mais fortes. Entretanto, se torna menos inteligente.",
                        "Growlithe tem um olfato bastante aguçado e uma memória olfativa incrível, nunca esquece um cheiro. Usa seu sistema de olfato avançado para determinar as emoções de outros seres vivos.",
                        "Arcanine é conhecido por sua alta velocidade. Dizem que é capaz de percorrer mais de 10 mil quilômetros em um único dia e noite. O fogo que arde com vigor no corpo deste Pokémon é sua fonte de poder.",
                        "Poliwag tem uma pele bem fina. Tanto que é possível ver suas vísceras em espiral através dela. Apesar de fina, a pele é também bem flexível e até mesmo os caninos mais afiados ricocheteiam dela.",
                        "A superfície do corpo de Poliwhirl é sempre úmida e lisa com um fluido viscoso. Graças a esta película escorregadia, pode escapar das garras dos oponentes em batalhas.",
                        "Os músculos fortes e altamente desenvolvidos de Poliwrath nunca se cansam, por mais que se exercite muito. É tão incrivelmente forte que pode cruzar o oceano nadando sem nenhum esforço.",
                        "Abra dorme por 18 horas por dia. Entretanto, pode pressentir a presença de oponentes até mesmo enquanto dorme. Quando em perigo, se teletransporta para um lugar seguro.",
                        "Kadabra emite uma onda alfa peculiar se tem dor de cabeça. Somente uma pessoa com uma psique forte pode se tornar o Treinador deste Pokémon.",
                        "O cérebro de Alakazam cresce sem parar e por causa disso sua cabeça é muito pesada para seu pescoço segurar. Portanto, segura sua cabeça usando seu poder psicocinético.",
                        "Os músculos de Machop são especiais e nunca ficam doloridos, nem mesmo com exercícios excessivos. Tem poder suficiente para arremessar cem pessoas adultas.",
                        "Os músculos tonificados de Machoke são fortes como aço. Este Pokémon é tão forte que pode levantar um lutador de sumô com um só dedo.",
                        "Machamp é tão forte que pode arremessar o que quiser. Entretanto, quando tem que realizar uma tarefa que requer delicadeza e destreza, seus braços acabam se enrolando sem jeito. Tende a agir sem pensar.",
                        "Este Pokémon tem um corpo fino e flexível permitindo que se incline e se balanceie para se esquivar de ataques. Cospe um fluido corrosivo capaz de derreter até ferro.",
                        "Weepinbell tem um gancho na parte de trás de seu corpo, que usa à noite para se prender a um galho e dormir. Caso se mova enquanto dorme, pode acordar no chão.",
                        "Victreebel tem uma trepadeira que estende de sua cabeça e agita como se fosse um animal prestes a atacar uma presa. Quando uma presa se aproxima, este Pokémon a engole por inteiro.",
                        "O corpo de Tentacool é composto por muita água. Se for removido do mar, acaba ressecado e murcho. Se este Pokémon acabar desidratado, coloque-o de volta no mar.",
                        "Tentacruel tem grandes esferas vermelhas em sua cabeça que brilham antes de lançar uma explosão ultrassônica. A explosão deste Pokémon causa ondas fortes ao seu redor.",
                        "Quanto mais longa for a vida de Geodude, maior será o desgaste nas suas extremidades, deixando este Pokémon mais arredondado. Entretanto, seu coração continuará duro, rochoso e áspero.",
                        "Graveler cresce comendo pedras. Aparentemente prefere comer as pedras que estão cobertas de musgo. Este Pokémon come toneladas de pedras diariamente.",
                        "Golem vive em montanhas. Se tiver um grande terremoto, estes Pokémon rolarão em massa para descer para o pé da montanha.",
                        "Ponyta é um Pokémon muito fraco quando nasce, mal pode se levantar. Fortalece-se ao tropeçar e cair tentando seguir seus pais.",
                        "Rapidash são vistos geralmente galopando por campos e planícies. Entretanto, quando este Pokémon fica sério, sua crina flameja e queima enquanto galopa a 240 km/h.",
                        "Slowpoke usa sua cauda para pegar presas ao mergulhá-la em um rio. Entretanto, este Pokémon frequentemente esquece o que está fazendo e passa dias inteiros fazendo nada na beira da água.",
                        "A cauda de Slowbro tem um Shellder grudado nela com uma mordida. Como resultado, a cauda não pode ser mais usada para pesca, o que faz Slowbro nadar com relutância para pegar presas.",
                        "Magnemite se conecta às linhas de tensão para alimentar-se de eletricidade. Se faltar energia na sua casa, cheque seu disjuntor. Você pode encontrar um alto número destes Pokémon grudados à caixa do disjuntor.",
                        "Magneton emite uma força magnética poderosa que é fatal aos dispositivos mecânicos. Por isso, as cidades grandes ligam suas sirenes para alertar aos cidadãos do aparecimento em massa deste Pokémon.",
                        "Farfetch'd é sempre visto com um caule de alguma planta. Parece que há caules bons e ruins. Este Pokémon é conhecido por lutar contra outros pelos caules.",
                        "As duas cabeças de Doduo nunca dormem ao mesmo tempo. Elas sempre revezam para que uma possa ficar de vigia enquanto a outra dorme.",
                        "Se as três cabeças de Dodrio estiverem olhando para lados diferentes, é sinal de que está de vigia. Se este Pokémon estiver de vigia, não chegue perto dele, pois poderá ser bicado.",
                        "Seel caça suas presas no oceano gelado debaixo das camadas de gelo. Quando precisa respirar, abre um buraco no gelo com a protuberância afiada de sua cabeça.",
                        "Dewgong ama cochilar sobre gelo. Há muito tempo um marinheiro viu este Pokémon dormindo sobre uma geleira e pensou que fosse uma sereia.",
                        "O corpo de lodo e elástico de Grimer pode passar por qualquer fresta, por menor que seja. Este Pokémon entra em canos de esgoto para beber a água suja.",
                        "Um fluido nojento com um cheiro horrível emana do corpo de Muk. Uma só gota do fluido corporal deste Pokémon pode apodrecer uma piscina inteira.",
                        "À noite, este Pokémon usa sua língua para cavar um buraco no fundo do mar para dormir. Shellder fecha sua concha enquanto dorme, mas deixa sua língua para fora.",
                        "Cloyster é capaz de nadar no mar ingerindo água pela boca e a expelindo para trás. Este Pokémon atira espinhos de sua concha com o mesmo método.",
                        "Gastly é constituído em grande parte de matéria gasosa. Seu corpo gasoso reduz rapidamente quando é exposto a ventos fortes. Grupos deste Pokémon se aglomeram debaixo das beiras das casas para escapar dos ventos.",
                        "Haunter é um Pokémon perigoso. Se acenar para você enquanto flutua no escuro, nunca chegue perto. Este Pokémon tentará lambê-lo para se apossar de sua vida.",
                        "Às vezes, em uma noite escura, sua sombra projetada pela luz da rua irá dominar você de repente. É na verdade Gengar fingindo ser sua sombra.",
                        "Onix tem um ímã no seu cérebro que age como um compasso para que não se perca enquanto está andando por túneis. Seu corpo se torna mais redondo e mais liso ao envelhecer.",
                        "Se seu nariz começar a coçar enquanto dorme, é sinal de que um destes Pokémon está no seu travesseiro tentando comer seu sonho pelas suas narinas.",
                        "Hypno segura um pêndulo na sua mão, cujo movimento e brilho deixam o oponente em um estado hipnótico profundo. Enquanto este Pokémon procura por presas, pule o pêndulo.",
                        "Krabby vivem em praias, enterrados em buracos na areia. Em praias quase sem comida, estes Pokémon podem ser vistos brigando uns com os outros por território.",
                        "Kingler tem uma pinça enorme que agita no ar para se comunicar com outros. Entretanto, por sua pinça ser muito pesada, o Pokémon se cansa rapidamente.",
                        "Voltorb foi visto primeiro em uma empresa que fabrica Poké Bolas. A conexão entre a primeira vez em que foi visto e o fato de se parecer com uma Poké Bola ainda é um mistério.",
                        "Electrode come eletricidade da atmosfera. Em dias em que raios caem, você pode ver este Pokémon explodindo por todo canto de tanto comer eletricidade.",
                        "Este Pokémon consiste de seis ovos que formam um aglomerado coeso. Os seis ovos se atraem e giram. Quando rachaduras aparecem nos ovos, é sinal de que está perto de evoluir.",
                        "Exeggutor veio originalmente dos trópicos. Suas cabeças crescem com sua exposição ao sol quente. Dizem que quando suas cabeças caem, se juntam para formar Exeggcute.",
                        "Cubone se lamenta pela mãe que não verá de novo. A lua cheia lembra este Pokémon de sua mãe, o que o faz chorar. As manchas na sua caveira são causadas por suas lágrimas.",
                        "Marowak é a forma evoluída de um Cubone. É mais forte por ter superado a tristeza de perder sua mãe. O temperamento forte e decidido deste Pokémon não é fácil de mudar.",
                        "As pernas de Hitmonlee se contraem e se alongam livremente. Usa suas pernas elásticas para dominar seus oponentes com chutes devastadores. Após a batalha, massageia suas pernas para vencer o cansaço.",
                        "Dizem que Hitmonchan possui o espírito de um boxeador que treinava para um campeonato mundial. Tem um espírito indomável e nunca irá amarelar diante de adversidades.",
                        "Sempre que Lickitung acha alguma coisa nova, irá, sem dúvidas, lambê-la. Faz isto para memorizar as coisas por sua textura e gosto. Não gosta de coisas azedas.",
                        "Se Koffing se agita, levanta a toxicidade de seus gases internos e os jorra pelo seu corpo inteiro. Pode inflar seu corpo demais e explodir.",
                        "Weezing ama os gases que emanam de comidas estragadas. Este Pokémon achará uma casa suja e a fará sua casa. À noite, quando as pessoas da casa dormem, irá se esbaldar no lixo.",
                        "Rhyhorn corre em linha reta esmagando tudo pelo seu caminho. Não se incomoda quando dá de cabeça com um bloco de aço. Entretanto, pode sentir um pouco de dor no dia seguinte pela batida.",
                        "O chifre de Rhydon pode esmagar até mesmo diamantes. Uma só pancada de seu rabo pode derrubar um prédio. Sua pele é tão dura que nem mesmo canhões podem arranhá-la.",
                        "Chansey põe ovos muito nutritivos diariamente. Os ovos são tão gostosos que são facilmente devorados até mesmo por pessoas sem apetite.",
                        "Os cipós de Tangela quebram facilmente se são agarrados. Isto não causa dor a este Pokémon, o que permite que fuja rapidamente. Os cipós perdidos são substituídos por novos cipós no dia seguinte.",
                        "Se encontrar alguma cria de Kangaskhan brincando sozinha, não é aconselhável que chegue perto ou tente pegá-la. A mãe com certeza estará por perto e ficará violentamente furiosa com você.",
                        "Horsea come insetos pequenos e os musgo de pedras. Se a correnteza do mar mudar rapidamente, irá se ancorar enrolando sua cauda em pedras ou corais para não ser arrastado para longe.",
                        "Seadra dorme após abrir espaço entre as ramas dos corais. Os pescadores de corais são espetados pelos espinhos venenosos deste Pokémon quando não percebem sua presença.",
                        "Goldeen é um Pokémon muito bonito com nadadeiras que crescem elegantemente na água. Entretanto, não baixe sua guarda perto deste Pokémon, pois pode atacar você com seu chifre.",
                        "No outono, Seaking machos podem ser vistos performando danças de acasalamento nos leitos de rios para atrair as fêmeas. A cor de seu corpo fica mais bonita nessa estação.",
                        "Staryu tem um órgão central, conhecido como núcleo, que brilha com uma luz vermelha. Se você for para a praia no final do verão, os núcleos destes Pokémon brilham como as estrelas no céu.",
                        "A parte central de Starmie, seu núcleo, brilha fortemente em sete cores. Por causa de sua natureza brilhante, este Pokémon foi apelidado de “joia do mar”.",
                        "Mr. Mime é um mestre em pantomima. Seus gestos e movimentos convencem os espectadores de que algo invisível realmente existe. Uma vez que os espectadores acreditam, aquilo que era invisível se torna palpável.",
                        "Scyther é incrivelmente rápido. Sua velocidade intensa reforça a eficácia do par de foices em seus antebraços. Suas foices são tão efetivas que podem cortar troncos maciços em um só gesto.",
                        "Jynx anda ritmicamente movimentando seus quadris como se estivesse dançando. Seus movimentos são tão fascinantes que pessoas que os veem são levadas a balançar seus quadris sem pensar no que estão fazendo.",
                        "Quando há uma tempestade, grupos deste Pokémon competem entre si para escalar prédios que possivelmente serão atingidos por raios. Algumas cidades usam Electabuzz como para-raios.",
                        "Magmar expele chamas violentas por seu corpo durante uma batalha para intimidar seu oponente. Suas explosões ardentes criam ondas quentes que queimam gramas e árvores ao seu redor.",
                        "Pinsir é surpreendentemente forte. Pode agarrar um oponente que pesa o dobro com seus chifres e levantá-lo facilmente. Os movimentos deste Pokémon ficam lentos em lugares frios.",
                        "Não se satisfaz a não ser que esteja sempre causando alvoroço. Se não há um oponente para Tauros batalhar, atacará árvores grandes e as derrubará para se acalmar.",
                        "Magikarp é um triste exemplo de um Pokémon que só consegue pular e salpicar água. Esta conduta levou os cientistas a estudar este Pokémon.",
                        "Quando Magikarp evolui para Gyarados, suas células cerebrais sofrem uma alteração estrutural. Dizem que esta alteração é a culpada por este Pokémon ser violento por natureza.",
                        "Humanos quase levaram Lapras à extinção. Dizem que à tardinha este Pokémon canta melancolicamente procurando pelos outros que restaram da sua espécie.",
                        "Ditto reorganiza sua estrutura celular para mudar de forma. Entretanto, se tenta se transformar em algo se guiando somente por sua memória, acaba errando nos detalhes.",
                        "A configuração genética instável de Eevee permite que mude de acordo com o ambiente em que vive. A radiação de várias pedras faz este Pokémon evoluir.",
                        "Vaporeon sofreu uma mutação repentina e cresceu brânquias e barbatanas que permitem que viva na água. Este Pokémon tem a habilidade de controlar água.",
                        "As células de Jolteon geram um nível baixo de eletricidade. Este poder é amplificado pela eletricidade estática do seu pelo, permitindo que solte relâmpagos. Seu pelo é feito de agulhas carregadas de eletricidade.",
                        "O pelo macio de Flareon tem um propósito funcional de liberar calor no ar para que seu corpo não superaqueça. A temperatura corporal deste Pokémon pode atingir um máximo de 900 °C.",
                        "Porygon é capaz de reverter completamente os dados do seu programa e entrar no espaço cibernético. Este Pokémon é protegido contra cópia, então não pode ser duplicado.",
                        "Omanyte é um dos Pokémon anciões que foi extinto há muito tempo e que foi regenerado a partir de fósseis por humanos. Se for atacado por um oponente, entra em sua concha dura.",
                        "Omastar usa seus tentáculos para capturar suas presas. Acredita-se que entrou em extinção porque sua concha cresceu pesada demais, fazendo com que seus movimentos ficassem muito devagar e difíceis.",
                        "Kabuto é um Pokémon regenerado de um fóssil, porém, em raras ocasiões, foram encontrados casos de exemplares vivos. Este Pokémon não mudou nada em 300 milhões de anos.",
                        "Há muito tempo Kabutops nadava debaixo d’água para caçar suas presas. Parece que estava evoluindo da vida marinha para a terrestre, como é evidente pelas mudanças em suas brânquias e pernas.",
                        "A origem de Aerodactyl data da era dos dinossauros. Foi regenerado do material genético extraído de âmbar. Supõe-se que tenha sido considerado o rei dos céus em tempos antigos.",
                        "Um dia normal da vida de Snorlax consiste em comer e dormir. É um Pokémon tão dócil que é fácil de ver crianças brincando em cima da sua barriga enorme.",
                        "Articuno é um Pokémon pássaro lendário que pode controlar gelo. O bater de suas asas esfria o ar. Dizem que começa a nevar quando este Pokémon voa.",
                        "Zapdos é um Pokémon pássaro lendário que tem a habilidade de controlar eletricidade. Vive em nuvens carregadas de eletricidade e ganha poder se for atingido por raios.",
                        "Moltres é um Pokémon pássaro lendário capaz de controlar fogo. Dizem que caso se machuque, mergulha seu corpo no magma de um vulcão para arder e se curar.",
                        "Dratini muda e se desfaz de sua pele velha continuamente, porque a energia vital de seu corpo não para de alcançar níveis incontroláveis.",
                        "Dragonair acumula uma quantidade enorme de energia dentro de seu corpo. Dizem que altera o clima da área em que está descarregando energia através dos cristais no seu pescoço e cauda.",
                        "Dragonite é capaz de dar a volta no mundo em apenas 16 horas. Tem um coração bondoso e guia para terra barcos perdidos durante tempestades.",
                        "Mewtwo é um Pokémon que foi criado por manipulação genética. Entretanto, apesar do poder científico dos humanos ter criado seu corpo, eles falharam em dar a Mewtwo um coração sensível.",
                        "Dizem que Mew possui a composição genética de todos os Pokémon. É capaz de ficar invisível quando quer para passar desapercebido quando alguém se aproxima."]

var closeInfo = document.getElementById("closeInfo")
closeInfo.style.backgroundImage = "url(./img/closeButton.png)"

for(var i=0; i <= numbersPokemon; i++){
    cardsPokemon[i] = document.createElement("div");
    cardsPokemon[i].id = "card"
    cardsPokemon[i].className = "card"+i
    cardsPokemon[i].style.backgroundImage = "linear-gradient(rgb(251,176,52), rgb(255,221,0))"

    for(var j=0; j<3; j++){
        infoCardsPokemon[i,j] = document.createElement("div");
        infoCardsPokemon[i,j].className = "infoCard"+j;
        infoCardsPokemon[i,0].style.backgroundImage = "url(./img/pokemon"+i+".gif)"


        infoCardsPokemon[i,1] = document.createElement("h3");
        if (i<9){
            infoCardsPokemon[i,1].innerHTML= pokemon[i] + " - 00" + (i+1)
        }else if (i<99){
            infoCardsPokemon[i,1].innerHTML= pokemon[i] + " - 0" + (i+1)
        }else{
            infoCardsPokemon[i,1].innerHTML= pokemon[i] + " - " + (i+1)
        }
        infoCardsPokemon[i,1].style.fontFamily = "Monospace"

        
        infoCardsPokemon[i,2] = document.createElement("h5");
        infoCardsPokemon[i,2].innerHTML= typePokemon[i]
        infoCardsPokemon[i,2].style.color = "white"
        infoCardsPokemon[i,2].style.fontFamily = "Monospace"
        infoCardsPokemon[i,2].style.backgroundColor = "rgba(0,0,0,0.8)"
        infoCardsPokemon[i,2].style.boxShadow = "0px 0px 5px 1px rgba(0,0,0,0.8)"
        infoCardsPokemon[i,2].style.border = "1px solid black"
        infoCardsPokemon[i,2].style.borderRadius = "10% / 50%"

        document.getElementById("main").appendChild(cardsPokemon[i]).appendChild(infoCardsPokemon[i,j]);
    }
    document.getElementById("main").appendChild(cardsPokemon[i]);
}

for (var i=0; i <=numbersPokemon; i++){
    infoClick[i] = document.createElement("div")
    infoClick[i].id = "mainInfoClick"
    infoClick[i].className = "infoClick"+i
    infoClick[i].style.backgroundImage = "linear-gradient(rgb(251,176,52), rgb(255,221,0))"
    
    for(var j=0; j < 5; j++){
        info[i,j] = document.createElement("div");
        info[i,j].className = "info"+j
        
        info[i,0].style.backgroundImage = "url(./img/pokemon"+i+".gif)"

        info[i,1] = document.createElement("h2");
        info[i,1].id = "infoName"
        info[i,1].style.fontFamily = "Monospace"

        if (i<9){
            info[i,1].innerHTML= pokemon[i] + " - 00" + (i+1)
        }else if (i<99){
            info[i,1].innerHTML= pokemon[i] + " - 0" + (i+1)
        }else{
            info[i,1].innerHTML= pokemon[i] + " - " + (i+1)
        }
        
        info[i,2] = document.createElement("h4");
        info[i,2].id = "infoTitleAbout"
        info[i,2].innerHTML= "Sobre"

        info[i,3] = document.createElement("p");
        info[i,3].id = "infoAbout"
        info[i,3].innerHTML= infoAboutPokemon[i]

        document.body.appendChild(infoClick[i]).appendChild(info[i,j]);
    }
    document.body.appendChild(infoClick[i]);

}

cardsPokemon[0].onclick = function cardClick(){
    infoClick[0].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[1].onclick = function cardClick(){
    infoClick[1].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[2].onclick = function cardClick(){
    infoClick[2].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[3].onclick = function cardClick(){
    infoClick[3].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[4].onclick = function cardClick(){
    infoClick[4].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[5].onclick = function cardClick(){
    infoClick[5].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[6].onclick = function cardClick(){
    infoClick[6].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[7].onclick = function cardClick(){
    infoClick[7].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[8].onclick = function cardClick(){
    infoClick[8].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[9].onclick = function cardClick(){
    infoClick[9].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[10].onclick = function cardClick(){
    infoClick[10].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[11].onclick = function cardClick(){
    infoClick[11].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[12].onclick = function cardClick(){
    infoClick[12].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[13].onclick = function cardClick(){
    infoClick[13].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[14].onclick = function cardClick(){
    infoClick[14].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[15].onclick = function cardClick(){
    infoClick[15].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[16].onclick = function cardClick(){
    infoClick[16].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[17].onclick = function cardClick(){
    infoClick[17].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[18].onclick = function cardClick(){
    infoClick[18].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[19].onclick = function cardClick(){
    infoClick[19].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[20].onclick = function cardClick(){
    infoClick[20].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[21].onclick = function cardClick(){
    infoClick[21].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[22].onclick = function cardClick(){
    infoClick[22].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[23].onclick = function cardClick(){
    infoClick[23].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[24].onclick = function cardClick(){
    infoClick[24].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[25].onclick = function cardClick(){
    infoClick[25].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[26].onclick = function cardClick(){
    infoClick[26].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[27].onclick = function cardClick(){
    infoClick[27].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[28].onclick = function cardClick(){
    infoClick[28].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[29].onclick = function cardClick(){
    infoClick[29].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[30].onclick = function cardClick(){
    infoClick[30].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[31].onclick = function cardClick(){
    infoClick[31].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[32].onclick = function cardClick(){
    infoClick[32].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[33].onclick = function cardClick(){
    infoClick[33].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[34].onclick = function cardClick(){
    infoClick[34].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[35].onclick = function cardClick(){
    infoClick[35].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[36].onclick = function cardClick(){
    infoClick[36].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[37].onclick = function cardClick(){
    infoClick[37].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[38].onclick = function cardClick(){
    infoClick[38].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[39].onclick = function cardClick(){
    infoClick[39].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[40].onclick = function cardClick(){
    infoClick[40].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[41].onclick = function cardClick(){
    infoClick[41].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[42].onclick = function cardClick(){
    infoClick[42].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[43].onclick = function cardClick(){
    infoClick[43].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[44].onclick = function cardClick(){
    infoClick[44].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[45].onclick = function cardClick(){
    infoClick[45].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[46].onclick = function cardClick(){
    infoClick[46].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[47].onclick = function cardClick(){
    infoClick[47].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[48].onclick = function cardClick(){
    infoClick[48].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[49].onclick = function cardClick(){
    infoClick[49].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[50].onclick = function cardClick(){
    infoClick[50].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[51].onclick = function cardClick(){
    infoClick[51].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[52].onclick = function cardClick(){
    infoClick[52].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[53].onclick = function cardClick(){
    infoClick[53].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[54].onclick = function cardClick(){
    infoClick[54].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[55].onclick = function cardClick(){
    infoClick[55].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[56].onclick = function cardClick(){
    infoClick[56].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[57].onclick = function cardClick(){
    infoClick[57].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[58].onclick = function cardClick(){
    infoClick[58].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[59].onclick = function cardClick(){
    infoClick[59].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[60].onclick = function cardClick(){
    infoClick[60].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[61].onclick = function cardClick(){
    infoClick[61].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[62].onclick = function cardClick(){
    infoClick[62].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[63].onclick = function cardClick(){
    infoClick[63].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[64].onclick = function cardClick(){
    infoClick[64].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[65].onclick = function cardClick(){
    infoClick[65].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[66].onclick = function cardClick(){
    infoClick[66].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[67].onclick = function cardClick(){
    infoClick[67].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[68].onclick = function cardClick(){
    infoClick[68].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[69].onclick = function cardClick(){
    infoClick[69].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[70].onclick = function cardClick(){
    infoClick[70].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[71].onclick = function cardClick(){
    infoClick[71].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[72].onclick = function cardClick(){
    infoClick[72].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[73].onclick = function cardClick(){
    infoClick[73].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[74].onclick = function cardClick(){
    infoClick[74].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[75].onclick = function cardClick(){
    infoClick[75].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[76].onclick = function cardClick(){
    infoClick[76].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[77].onclick = function cardClick(){
    infoClick[77].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[78].onclick = function cardClick(){
    infoClick[78].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[79].onclick = function cardClick(){
    infoClick[79].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[80].onclick = function cardClick(){
    infoClick[80].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[81].onclick = function cardClick(){
    infoClick[81].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[82].onclick = function cardClick(){
    infoClick[82].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[83].onclick = function cardClick(){
    infoClick[83].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[84].onclick = function cardClick(){
    infoClick[84].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[85].onclick = function cardClick(){
    infoClick[85].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[86].onclick = function cardClick(){
    infoClick[86].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[87].onclick = function cardClick(){
    infoClick[87].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[88].onclick = function cardClick(){
    infoClick[88].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[89].onclick = function cardClick(){
    infoClick[89].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[90].onclick = function cardClick(){
    infoClick[90].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[91].onclick = function cardClick(){
    infoClick[91].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[92].onclick = function cardClick(){
    infoClick[92].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[93].onclick = function cardClick(){
    infoClick[93].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[94].onclick = function cardClick(){
    infoClick[94].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[95].onclick = function cardClick(){
    infoClick[95].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[96].onclick = function cardClick(){
    infoClick[96].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[97].onclick = function cardClick(){
    infoClick[97].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[98].onclick = function cardClick(){
    infoClick[98].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[99].onclick = function cardClick(){
    infoClick[99].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[100].onclick = function cardClick(){
    infoClick[100].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[101].onclick = function cardClick(){
    infoClick[101].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[102].onclick = function cardClick(){
    infoClick[102].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[103].onclick = function cardClick(){
    infoClick[103].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[104].onclick = function cardClick(){
    infoClick[104].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[105].onclick = function cardClick(){
    infoClick[105].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[106].onclick = function cardClick(){
    infoClick[106].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[107].onclick = function cardClick(){
    infoClick[107].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[108].onclick = function cardClick(){
    infoClick[108].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[109].onclick = function cardClick(){
    infoClick[109].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[110].onclick = function cardClick(){
    infoClick[110].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[111].onclick = function cardClick(){
    infoClick[111].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[112].onclick = function cardClick(){
    infoClick[112].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[113].onclick = function cardClick(){
    infoClick[113].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[114].onclick = function cardClick(){
    infoClick[114].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[115].onclick = function cardClick(){
    infoClick[115].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[116].onclick = function cardClick(){
    infoClick[116].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[117].onclick = function cardClick(){
    infoClick[117].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[118].onclick = function cardClick(){
    infoClick[118].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[119].onclick = function cardClick(){
    infoClick[119].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[120].onclick = function cardClick(){
    infoClick[120].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[121].onclick = function cardClick(){
    infoClick[121].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[122].onclick = function cardClick(){
    infoClick[122].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[123].onclick = function cardClick(){
    infoClick[123].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[124].onclick = function cardClick(){
    infoClick[124].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[125].onclick = function cardClick(){
    infoClick[125].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[126].onclick = function cardClick(){
    infoClick[126].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[127].onclick = function cardClick(){
    infoClick[127].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[128].onclick = function cardClick(){
    infoClick[128].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[129].onclick = function cardClick(){
    infoClick[129].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[130].onclick = function cardClick(){
    infoClick[130].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[131].onclick = function cardClick(){
    infoClick[131].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[132].onclick = function cardClick(){
    infoClick[132].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[133].onclick = function cardClick(){
    infoClick[133].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[134].onclick = function cardClick(){
    infoClick[134].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[135].onclick = function cardClick(){
    infoClick[135].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[136].onclick = function cardClick(){
    infoClick[136].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[137].onclick = function cardClick(){
    infoClick[137].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[138].onclick = function cardClick(){
    infoClick[138].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[139].onclick = function cardClick(){
    infoClick[139].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[140].onclick = function cardClick(){
    infoClick[140].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[141].onclick = function cardClick(){
    infoClick[141].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[142].onclick = function cardClick(){
    infoClick[142].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[143].onclick = function cardClick(){
    infoClick[143].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[144].onclick = function cardClick(){
    infoClick[144].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[145].onclick = function cardClick(){
    infoClick[145].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[146].onclick = function cardClick(){
    infoClick[146].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[147].onclick = function cardClick(){
    infoClick[147].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[148].onclick = function cardClick(){
    infoClick[148].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[149].onclick = function cardClick(){
    infoClick[149].style.display = "block"
    closeInfo.style.display = "block"
}
cardsPokemon[150].onclick = function cardClick(){
    infoClick[150].style.display = "block"
    closeInfo.style.display = "block"
}


closeInfo.onclick = function close(){
    closeInfo.style.display = "none"
    for(var i=0; i <=numbersPokemon; i++){
        infoClick[i].style.display = "none"
    }
}

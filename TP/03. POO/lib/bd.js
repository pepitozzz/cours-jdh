
	function BD(id, titre, auteur, anneeSortie, resume, prix, stock)
	{
		this.id = id;
		this.titre = titre;
		this.auteur = auteur;
		this.anneeSortie = anneeSortie;
		this.resume = resume;
		this.prix = (prix == undefined) ? 0.00 : prix;
		this.stock =  (stock == undefined) ? 0 : stock;
		this.stocker = function (qte)
		{
			this.stock += (qte == undefined) ? 1 : qte;
		};
		this.destocker = function (qte)
		{
			this.stock -= (qte == undefined) ? 1 : qte;
		};
	}
        
        
        luckyMaDalton = new Array (1, "Lucky Luke - Ma Dalton", "Morris - Goscinny", 50, 10, 1971);
        luckyDaltonRachat = new Array (2, "Lucky Luke - Les Dalton se rachetent", "Morris - Goscinny", 75, 15, 1965);
        luckyCuisinier = new Array (3, "Lucky Luke - Le cuisinier francais", "Morris - Guy Louis", 20, 50, 2003);
        asterixGaulois = new Array (4, "Asterix le Gaulois", "Uderzo - Goscinny", 1000, 1, 1961);
        asterixGoths = new Array (5, "Asterix et les Goths", "Uderzo - Goscinny", 900, 0, 1963);
        tanguyLaverdure = new Array (6, "Tanguy et Laverdure a l\ecole", "Uderzo - Charlier", 15, 4, 1996);
        blueberry = new Array (7, "Blueberry - La Tribu fantome", "Giraud - Charlier", 5, 2, 1982);
        largoWinch = new Array (8, "Largo Winch - La voie et la vertu", "Van Hamme - Francq", 25, 50, 2008);
        
        
 	//BD.prototype.toString = function()
	//{
	//	out= "FICHE BD N°"+this.id;
	//	out+= "Titre :" +this.titre;                
	//	out+= "Auteur :" +this.auteur;
	//	out+= "Prix  :" +this.prix;
	//	out+= "Stock :" +this.stock+"<br/>";
	//	return out;
	//}
        
       
        

        
const Membro = require('../models/membro')
const User = require('../models/user')


module.exports = class MembrosController {
    static async dashboard (req,res) {
        res.render('membros/dashboard')  
    }
    static async deleteMembro(req, res) {
        try {
          const membros = await Membro.findAll();
      
          // Mapeia um objeto para cada membro com nome e id
          const membrosData = membros.map((membro) => ({
            nome: membro.dataValues.nome,
            membroId: membro.dataValues.id,
          }));
      
          console.log(membrosData);
      
          // Renderiza a view e passa a lista de membros como variável
          res.render('membros/delete', { membrosData });
        } catch (error) {
          console.log(`Nao foi possivel listar os membros ${error}`);
        }
      }
      
      static async deleteMembroPost(req, res) {
        const id = req.body.id;
      
        await Membro.destroy({ where: { id: id } });
      
        // Redireciona para a página de listagem de membros
        res.redirect('/membros/delete');
      }
    static async editMembroPost (req,res) {
  
        try {
            const membros = await Membro.findAll();
            const nomes = membros.map((membro) => membro.dataValues.nome);
            const membroId = membros.map((membro) => membro.dataValues.id);
            console.log(membroId)

            // Renderiza a view e passa a lista de membros como variável
            res.render('membros/edit', { nomes, membroId});
        } catch (error) {
            console.log(`Nao foi possivel listas os membros ${error}`)
        }

    }
    static createMembro (req,res) {
        res.render('membros/create')
    }
    static async createMembroPost (req,res) {

        const membro = {
            nome: req.body.nome,
            email: req.body.email,
            telefone: req.body.telefone,
            data_nascimento: req.body.dataNascimento,
            instagram: req.body.instagram,
            cep: req.body.cep,
            rua: req.body.rua,
            bairro: req.body.bairro,
            cidade: req.body.cidade,
            numero: req.body.numero,
            data_conversao: req.body.dataConversao,
            data_batismo: req.body.batismo,
            conjuge: req.body.conjuge
        }


        try {
            await Membro.create(membro);

            req.flash('message', 'Membro cadastrado!')
    
            req.session.save(() => {
                res.redirect('/membros/dashboard')
            })
            
        } catch (error) {
            console.log(`Erro ao tentar inserir membro ${error}`)
        }
    
        

    }
    static async membros(req,res) {
        res.render('membros/main') 
    }
}
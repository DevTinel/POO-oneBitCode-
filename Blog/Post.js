class Post {
    constructor(authorPost) {
        this.authorPost = [];
        this.comments = [];
        this.authorComments = [];
        this.descriptions = [];
        this.author = authorPost;
    }
    addComment(comment, authorComment) {
        this.comments.push(comment);
        this.authorComments.push(authorComment);
    }
    showComments() {
        return this.comments.forEach((comment, index) => {
            console.log(`                ${comment}
                                "${this.authorComments[index]}", 
            `);
        });
    }
    addPost(description) {
        this.descriptions.push(description);
    }
    showPosts() {
        return this.descriptions.forEach((description, index) => {
            console.log(`
            Autor: ${this.author}
            Descrição: ${description}

            Comentarios:
            `);
            this.showComments();
        });
    }
}

const post2 = new Post("David");

post2.addPost("to na facul , top bagarai!..");

post2.addComment("Muito bom cara parabens", "Pedro Sampaio");
post2.addComment("Show fera , sucesso", "Neymar Jr");
post2.addComment("Assim eu apaixono !!!", "Annita");
post2.addComment("PAUDURECI !!!", "Pablo vittar");

post2.showPosts();

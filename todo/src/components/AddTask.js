import React, { Component } from 'react'


export default class AddTask extends Component {

  render() {
    return (
        <section className="mb-3">
            <h1 className="m-3 text-success">Nouvelle tâche</h1>
            <div className="card mx-3">
                <form className="card-body" onSubmit={(e) => this.handleSubmit(e)}>
                    <div className="form-group">
                        <label form="taskName">Nom de la tâche</label>
                        <input type="text" className="form-control mt-3" name="taskName" id="taskName" required ref={input => this.newTask = input} />
                    </div>
                    <button type="submit" className="btn btn-success mt-3">Créer</button>
                </form>
            </div>
        </section>
    )
  }
}

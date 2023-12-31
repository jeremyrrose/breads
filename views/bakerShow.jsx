const React = require('react')
const Default = require('./layouts/default')

function Show ({baker}) {
    return (
      <Default>
            <h3>{baker.name}</h3>
            <p>{baker.name} has been baking with us since {baker.startDate.getFullYear()}</p>
            <p>About {baker.name}: {baker.bio}</p>
            <form action={`/bakers/${baker.id}?_method=DELETE`} method="POST">
              <button type='submit'>Delete {baker.name}</button>
            </form>
            <h3>Breads {baker.name} has baked</h3>
            <ul>
                {   
                    baker.breads.length ?
                    baker.breads.map((bread)=> {
                        return (
                            <li key={bread.id}>
                                <a href={`/breads/${bread.id}`}>{bread.name}</a>
                            </li>
                        )
                    }) : "This baker has baked no breads."
                }
            </ul>

      </Default>
    )
}

module.exports = Show

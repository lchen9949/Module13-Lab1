let zak = 'Zak Ruvalcaba'
let sally = 'Sally Smith'
let holly = 'Holly Unlikely'
let amol = 'Amol Shookup'
let robin = 'Robin Banks'
let aaron = 'Aaron D. Tyers'
let bbron = 'Baron E. Tyoo'
let ccron = 'Caron F. Tycc'
let ddron = 'Ddron G. Tydd'
let eeron = 'Eeron H. Tyee'
let ffron = 'Ffron I. Tyff'
    const element = (
        <ul style={{'color':'blue', 'fontSize': '24px'}}>
            <li>{zak}</li>
            <li>{sally}</li>
            <li>{holly}</li>
            <li>{amol.toUpperCase()}</li>
            <li>{robin}</li>
            <li>{aaron}</li>
            <li>{bbron}</li>
            <li>{ccron}</li>
            <li>{ddron}</li>
            <li>{eeron}</li>
            <li>{ffron}</li>
        </ul>
    )
ReactDOM.render(element, document.getElementById('content'))

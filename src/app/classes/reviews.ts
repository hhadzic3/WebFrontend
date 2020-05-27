export class Reviews{
    id: string
    state: string //[['NA PREGLEDU', 'ZAVRSEN', 'U ARHIVI', 'IN_PROGRESS', 'DONE', 'IN_ARCHIVE']]
    kind: string // REGULARNI , PREVENTIVNI , VANREDNI
    responsible_person: string
    vehicle: string
}
export type ScriptData = {
    name: string
    scriptGroupName: string
    scriptGroupDescription: string
    menuItems: string[]
    fileName: string
    undoText: string
    shortDescription: string
    requireSelection: boolean
    requireScore: boolean
    noStore: boolean
    author: {
        name: string
        website: string
        email: string
    }
    copyright: string
    version: string
    categories: string[]
    date: string
    notes: string
    revisionNotes: string[]
    id: string
    minJWLuaVersion: string
    maxJWLuaVersion: string
    minFinaleVersion: string
    maxFinaleVersion: string
}

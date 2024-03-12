function dfs(node) {
    console.log(node.value);
    for (let child of node) {
        dfs(child);
    }
}